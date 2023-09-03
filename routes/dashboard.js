import { Router } from 'express';
import session from 'express-session';
import order_cont from '../controllers/orders_admin_cont.js'
import Order from "../models/order_schma.js"
var router = Router();


router.get('/dashboard',order_cont.getorders);

router.get('/done/:id', async function(req, res, next) {
  console.log('start done order');

  const update=await Order.findByIdAndUpdate(req.params.id,{ status: 'done' },{ new: true });
  console.log('done order');

  res.redirect('/dashboard');
  
});

  router.get('/test', function(req, res, next) {
    res.send('Test Route');
  });


export default router;