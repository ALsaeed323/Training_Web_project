import Product from "../models/product_schma.js";



const Search = async (req, res) => {
    const searchTerm = req.body.search;
  
    try {
      const results = await Product.find({
        $or: [
          { name: { $regex: searchTerm, $options: "i" } },
          { title: { $regex: searchTerm, $options: "i" } },
          { description: { $regex: searchTerm, $options: "i" } }
        ]
      });
      console.log(`hello  this is the result ${results}` ); 
  
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while searching." });
    }
  };
  const Search_cont = {
    Search,
};


export default Search_cont;