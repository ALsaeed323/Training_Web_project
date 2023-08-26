// server.mjs
import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables from .env file
dotenv.config();

const hostname = "127.0.0.1";
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // Assuming you're using the EJS view engine

app.get("/", async (req, res) => {
  // render the index page
  res.send('hello');
});
//

app.listen(PORT, hostname, () => {
  console.log(`Server is listening on http://${hostname}:${PORT}`);
});

