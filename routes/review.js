import { Router } from 'express';
import session from 'express-session';
import cart from "../controllers/cart_cont.js"
import addreview from "../controllers/review_cont.js"
import Review from "../models/review_schema.js"
import Product from "../models/product_schma.js"
var router = Router();


router.get('/review/:id',async function(req, res, next) {
    const id=req.params.id;
    console.log('dh el id');
    console.log(id);
res.render('review',{id:id});
  });
  

  router.post("/addreview/:id",async function(req,res,next){
    try{

    const review = new Review ({
        stars: req.body.stars,
        text: req.body.text,
        prodid:req.params.id,
        username:req.session.User.fullname,
      });

      console.log(req.body)

      const savedReview = await review.save();
      await Product.updateOne(
        { _id: req.params.id }, // Update the product with this ID
        { $push: { reviewslist: savedReview._id } } // Add the review's ID to the 'reviewslist' array
    );

    res.redirect("/");
} catch (err) {
    console.error(err);
    res.status(500).send("An error occurred.");
}
      /*await review.save()
    .then( result => {
        res.redirect("/")
    })
    .catch( err => {
        console.log(err)
    })*/

  });

  router.get('/test', function(req, res, next) {
    res.send('Test Route');
  });


export default router;