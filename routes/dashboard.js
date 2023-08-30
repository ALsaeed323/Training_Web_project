import { Router } from 'express';
import session from 'express-session';
var router = Router();


router.get('/dashboard', function(req, res, next) {
    /*req.session.Email = req.query.email;
    req.session.psw = req.query.psw;
    req.session.x = 'x';*/
  
    //signin.find()
    
   /* if (!req.session || req.session.user === undefined || req.session.user.Type === 'user') {
      res.render("homepage", { User: (req.session.user === undefined ? "" : req.session.user) });
    } else {
      res.render("noaccess", { user: (req.session.user === undefined ? "" : req.session.user) });
    }*/
    
    //res.render("index");
    
  res.render("dashboard");
  
   // res.render("homepage", { user: (req.session.user === undefined ? "" : req.session.user) });
  });

  router.get('/test', function(req, res, next) {
    res.send('Test Route');
  });


export default router;