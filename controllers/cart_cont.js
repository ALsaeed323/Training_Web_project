import Product from "../models/product_schma.js";



const getcart = async (req, res) => {

  try {
    const products_id = req.session.User.cart;
    console.log(products_id);

    const productsData = [];

    for (const element of products_id) {
      console.log(element);
      try {
        const product_data = await Product.findOne({ _id: element });
        console.log('proooooood');
        console.log(product_data);
        if (product_data) {
          productsData.push(product_data);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
    console.log(productsData);
    res.render("cart", { productsData }); 
  } catch (error) {
    console.error('Main error:', error);
    
  }


}


const exportcart = {
    getcart,
  }
  export default exportcart