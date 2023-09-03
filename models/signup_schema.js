import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

const SignupSchema = new Schema({
  fullname: { 
    type: String,
    required: true          
  },
  mail: { 
    type: String,
    required: true,
    match: [/\S+@\S+\.\S+/, "is invalid"],
    //unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8 // Minimum length of the password
  },
  cpassword: {
    type: String,
    required: true,
    
  },
  
  Type: {
    type: String,
    required: true
  },
  cart: [{
        type: String
  }],
  orderslist:[{
      type: String
}],
}, { timestamps: true });



// Create a model based on that schema
const Signup = mongoose.model("users",SignupSchema);
// export the model
//module.exports=Signup
export default Signup
