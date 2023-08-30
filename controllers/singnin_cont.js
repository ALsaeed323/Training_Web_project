// Assuming you have already imported necessary modules and set up the server

// Import necessary modules
import Signup from "../models/signup_schema.js";
import bcrypt from 'bcrypt';
import express from "express";

// Create an Express Router instance
const userRouter = express();

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
});

