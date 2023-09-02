import Product from "../models/product_schma";


const Filter=async(req,res)=>{
    const filterTerm = req.body.filter;

    try{
        const filter= await  Product.find({
            $or:[
                { location: { $regex: filterTerm, $options: "i" } },
                { city: { $regex: filterTerm, $options: "i" } },
                { state: { $regex: filterTerm, $options: "i" } }
            ]
        })
        console.log(`hello  this is the result ${filter}` ); 
  
        res.json(filter);
    }

 catch (error) {
      res.status(500).json({ error: "An error occurred while searching." });
    }
  };
  const Filter_cont = {
    Filter,
};

export default Filter_cont;