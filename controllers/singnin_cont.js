import Signup from "../models/signup_schema.js";
import bcrypt from 'bcrypt';

const signinform = async (req, res) => {
  try {

    const email=req.body.logmail
    const mypassword=req.body.logpassword 

   
    const user = await Signup.findOne({ mail: email });

    if (user) {
     
      const passwordMatch = await bcrypt.compare(mypassword, user.password);

      if (passwordMatch) {
        console.log("User found and password matched:", user);
        req.session.User = user;
        if(req.session.User.Type==='user'){
        res.redirect("/")
        }
    else{
res.redirect('/dashboard')
    }
        
      } else {
        console.log("Password mismatch.");
        
      }
    } else {
      console.log("User not found.");
      
    }
  } catch (error) {
    console.error("Error during sign-in:", error);
   
  }
};

const exportsignin = {
  signinform,
};
export default exportsignin;



// Create an Express Router instance
/*const userRouter = express();

// Define the POST route for user sign-in
userRouter.post('/signin', async (req, res) => {
  console.log('ellp')
    const { email, password } = req.body;

    // Check for email and password in the request
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        // Find the signup in the database
        const signup = await Signup.findOne({ email });

        // Check if signup exists and password is correct
        if (signup && await bcrypt.compare(password, signup.password)) {
            req.session.signup = signup;
            return res.status(200).json({ message: "Logged in" });
        } else {
            // Send error message if signup doesn't exist or password is incorrect
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
});*/

