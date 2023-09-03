import { Router } from 'express';
import session from 'express-session';
import Signup from "../models/signup_schema.js"
import cart from "../controllers/cart_cont.js"
var router = Router();

router.get('/cart',cart.getcart );

router.get('/addcart/:id',async function(req, res, next) {
    try{
    
    const user = await Signup.findById(req.session.User._id);
    if (!user) {
        throw new Error('User not found');
    }else{
      console.log("user found and adding to cart")
        user.cart.push(req.params.id);
        await user.save();
        req.session.User = user;

        res.redirect("/");
    }
}catch (error) {
    throw error;
}

  });

  router.get('/test', function(req, res, next) {
    res.send('Test Route');
  });


export default router;