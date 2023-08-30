import { Router } from 'express';
import session from 'express-session';
import  signupform  from '../controllers/signup_cont.js'
import signinform from '../controllers/singnin_cont.js'





//import signin from '../models/signup_schema.js'
var router = Router();

router.get('/signup', function(req, res, next) {
 
  
res.render("signup");

 
});

router.post("/signupform",signupform.signupform);

router.post("/signinform",signinform.signinform);

  
  router.get("/signin", (req, res) => {
    res.render("signin");
  });

  router.get('/test', function(req, res, next) {
    res.send('Test Route');
  });
  

export default router;