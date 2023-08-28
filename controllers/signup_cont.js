import Signup from "../models/signup_schema.js"
import bcrypt from 'bcrypt';




const signupform = async (req,res)=>{
  //const signup =new Signup(req.body)
  const saltRounds = 10;
  const password = req.body.password;
  const cpassword=req.body.cpassword;

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const hashedcPassword = await bcrypt.hash(cpassword, saltRounds);

  
   // const existingUser = await User.findOne({ mail: req.body.mail });

    /*if (existingUser) {
      console.log("Email already exists");
      res.send("Email already exists");
    } else {*/
    const sign = new Signup ({
        fullname: req.body.fullname,
        mail: req.body.mail,
        password: hashedPassword,
        cpassword: hashedcPassword,
        Type:req.body.Type,
      });

      console.log(req.body)
      await sign.save()
    .then( result => {
        res.redirect("/")
    })
    .catch( err => {
        console.log(err)
    })
  
//}
}
const exportsignup = {
  signupform,
}
export default exportsignup