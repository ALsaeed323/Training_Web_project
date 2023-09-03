import Product from "../models/product_schma.js";
import Order from "../models/order_schma.js"



const getorders = async (req, res) => {

    try {
        const orders = await Order.find({});
        console.log(orders[1]); // Log the second product in the array
        res.render("dashboard",{ item: orders});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching products.' });
    }
  } 




const exportorders = {
    getorders,
  }
  export default exportorders