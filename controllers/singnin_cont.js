import Signup from "../models/signup_schema.js"
import bcrypt from 'bcrypt';
import express from "express";


const userRouter = express.Router();

userRouter.post("/signin", async (req, res) => {
    console.log('hello');
    // Get email and password from the request
    const { email, password } = req.body;
    // Check for email and password in the request
    if (!email || !password) {
      return res.status(400).send({ message: "Email and password are required" });
    }
    try {
      // Find the signup in the database
      const signup = await Signup.findOne({ email });
      // Check if signup exists and password is correct
      if (signup && await bcrypt.compare(password, signup.password)) {
        req.session.signup = signup;
        console.log(alert('done'));
        return res.status(200).send({ message: "Logged in" });
       
      } else {
        // Send error message if signup doesn't exist or password is incorrect
        return res.status(401).send({ message: "Invalid email or password" });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).send({ message: "Internal server error" });
    }
  });
