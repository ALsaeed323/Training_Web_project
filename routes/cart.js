import { Router } from 'express';
import session from 'express-session';
import Signup from "../models/signup_schema.js"
var router = Router();


router.get('/addcart/:id',async function(req, res, next) {
    try{
    
    const user = await Signup.findById(req.session.User._id);
    if (!user) {
        throw new Error('User not found');
    }else{
        user.cart.push(req.params.id);
        await user.save();

        res.render("dashboard");
    }
}catch (error) {
    throw error;
}

  });

  router.get('/test', function(req, res, next) {
    res.send('Test Route');
  });


export default router;