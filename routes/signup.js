import { Router } from 'express';
import session from 'express-session';
import  signupform  from '../controllers/signup_cont.js'
//import signin from '../models/signup_schema.js'
var router = Router();

router.get('/signup', function(req, res, next) {
 
  
res.render("signup");

 
});

router.post("/signupform",signupform.signupform)


  router.get('/test', function(req, res, next) {
    res.send('Test Route');
  });


export default router;