import Product from "../models/product_schma.js";


const Add_Product = async (req,res)=>{

    const proudut = new Product ({
        name: req.body.name,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        city:req.body.location,
        address:req.body.address,
        state:req.body.state,
        images:req.body.images

      });
      await proudut.save()
      .then( result => {
        res.redirect("/")
    })
    .catch( err => {
        console.log(err)
    })

}

const Update_product = async (req, res) => {
    const namee = req.body.name; // 
    const product = await Product.findOne({ name: namee }); 
    

    try {
        const updatedProduct = await Product.findByIdAndUpdate(product, {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            city: req.body.location,
            address: req.body.address,
            state: req.body.state,
            images: req.body.images
        }, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error updating product' });
    }
}

const Delete_product = async (req, res) => {
    const namee = req.body.name; // 
    const product = await Product.findOne({ name: namee }); 
    
   
    try {
        const deletedProduct = await Product.findByIdAndRemove(product);
        console.log(namee);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error deleting product' });
    }
}


const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        console.log(products[1]); // Log the second product in the array
        res.render("homepage",{ item: products});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching products.' });
    }
};

const product_cont = {
    Add_Product,
    Update_product,
    Delete_product,
    getProducts,
};

export default product_cont;