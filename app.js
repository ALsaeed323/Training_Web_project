// server.mjs
import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from"mongoose";
import session from 'express-session';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';


import homepage_router from "./routes/homepage.js";
import signup_router from "./routes/signup.js";

// Load environment variables from .env file
dotenv.config();

const hostname = "127.0.0.1";
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(session({ secret: 'Your_Secret_Key' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

//database
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // Assuming you're using the EJS view engine


app.use('/', homepage_router);
app.use('/',signup_router);


// /*app.get("/", async (req, res) => {
//   // render the index page
//   res.send('hello');
// });

//
//mongodb+srv://ahmedmohamed1jan2003:hS8epPZAaglQpiGx@cluster0.4giicn8.mongodb.net/
//mongodb+srv://ahmed2110223:Bi1rExHxs1QSCUpP@webproject.fve9yw3.mongodb.net/test?retryWrites=true&w=majority
//mongodb+srv://ahmedmohamed1jan2003:hS8epPZAaglQpiGx@cluster0.4giicn8.mongodb.net/training?retryWrites=true&w=majority

mongoose.connect("mongodb+srv://ahmedmohamed1jan2003:hS8epPZAaglQpiGx@cluster0.4giicn8.mongodb.net/training?retryWrites=true&w=majority")
.then(()=>{

    console.log(`Example app listening on port ${process.env.PORT}`)
  })
.catch((error)=>{
    console.log("there is error")
  console.log(error)
})

app.listen(PORT, hostname, () => {
  console.log(`Server is listening on http://${hostname}:${PORT}`);
});

export default app;