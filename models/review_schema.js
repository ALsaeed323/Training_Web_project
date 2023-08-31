import mongoose from "mongoose";


const Schema = mongoose.Schema;


const ReviewSchema = new Schema({
  stars: { 
    type: String,
    required: true          
  },
  text: { 
    type: String,
    required: true,
    
  },

  prodid:{
    type:String,
  },

  username:{
type:String
  },
  
}, { timestamps: true });



// Create a model based on that schema
const Review = mongoose.model("reviews",ReviewSchema);
// export the model
//module.exports=Signup
export default Review
