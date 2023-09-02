import { Router } from 'express';
import session from 'express-session';
import  signupform  from '../controllers/signup_cont.js'
import signinform from '../controllers/singnin_cont.js'
import Product_cont from "../controllers/product_cont.js"
import Search_cont from "../controllers/search_cont.js"
import Filter_cont from '../controllers/filter_cont.js';






//import signin from '../models/signup_schema.js'
var router = Router();

router.get('/signup', function(req, res, next) {
 
  
res.render("signup");

 
});

router.post("/signupform",signupform.signupform);
router.post("/signinform",signinform.signinform);
router.post("/addproduct",Product_cont.Add_Product);
router.post("/deleteproduct",Product_cont.Delete_product);
router.post("/updateproduct",Product_cont.Update_product);
router.post("/search",Search_cont.Search);
router.post("/filter",Filter_cont.Filter);

  
  router.get("/signin", (req, res) => {
    res.render("signin");
  });
  router.get("/addproduct", (req, res) => {
    res.render("addproduct");
  });

  router.get("/deleteproduct", (req, res) => {
    res.render("deleteproduct");
  });

  router.get("/updateproduct", (req, res) => {
    res.render("updateproduct");
  });
  router.get("/search", (req, res) => {
    res.render('homepage');
  });
  router.get("/filter", (req, res) => {
    res.render('filter');
  });



  router.get('/test', function(req, res, next) {
    res.send('Test Route');
  });
  

export default router;
