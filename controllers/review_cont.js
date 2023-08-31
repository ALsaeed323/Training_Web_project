import Review from "../models/review_schema.js"





const reviewform = async (req,res)=>{
  
    const review = new Review ({
        stars: req.body.stars,
        text: req.body.text,
      });

      console.log(req.body)
      await review.save()
    .then( result => {
        res.redirect("/")
    })
    .catch( err => {
        console.log(err)
    })
  
//}
}
const exportreview = {
    reviewform,
}
export default exportreview