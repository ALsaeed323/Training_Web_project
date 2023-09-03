import { Router } from 'express';
import session from 'express-session';
import Order from "../models/order_schma.js"
import Prod from "../models/product_schma.js"
import UserSchema from "../models/signup_schema.js"






//import signin from '../models/signup_schema.js'
var router = Router();


  router.get("/confirm/:id",function(req, res){

const prodeid=req.params.id;
console.log('dh el idddddddddddddddddd');
console.log(prodeid);
    res.render("payment",{prodid:prodeid});

  });
 
  router.post("/order/:id", async function(req, res, next){
try{
    const proddata=await Prod.findById(req.params.id);



    const order = new Order ({
        status:req.body.status,
        address:req.body.address,
        phone_number:req.body.phone_number,
        userid:req.session.User._id,
        productid:req.params.id,
        producttitle:proddata.title,
        productprice:proddata.price,
      });

      console.log(req.body)
     const orderdata= await order.save();

     
        const user = await UserSchema.findOne({_id:req.session.User._id});
    
        if (!user) {
          return "User not found"; // Handle this case as per your application logic
        }
    
        // Use $push to add the orderId to the orderslist array
        user.orderslist.push(orderdata._id);
        user.cart.pull(req.params.id,);
    
        await user.save();
        req.session.User = user;
    
      res.redirect("/");


    } catch (error) {
        console.error("Error adding order to orderslist:", error);
        res.status(500).json({ error: "Error adding order to orderslist" });
      }
    
      });


      router.get("/displayorders",async function(req, res){

        try {
            const orders_id = req.session.User.orderslist;
            console.log(orders_id);
        
            const orderssData = [];
        
            for (const element of orders_id) {
              console.log(element);
              try {
                const orders_data = await Order.findOne({ _id: element });
                console.log('orrrrders');
                console.log(orders_data);
                if (orders_data) {
                    orderssData.push(orders_data);
                }
              } catch (error) {
                console.error('Error fetching product:', error);
              }
            }
        
            res.render("orders", { orderssData }); 
          } catch (error) {
            console.error('Main error:', error);
            
          }
        
          });

 


  router.get('/test', function(req, res, next) {
    res.send('Test Route');
  });
  

export default router;
