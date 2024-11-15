import express from "express";
import dotenv from "dotenv";
import  { connect } from "./db/connect.js";
import morgan from "morgan";
import cors from "cors";

dotenv.config();
connect();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());


const app = express();
const PORT = process.env.PORT || 4000;


// Routes
app.get("/", (req, res) => {  
  res.send("Hello World!");
});


// Error handling
app.use((error,req, res, next) => {
  restatus(500).json({ error: error.message });
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`); 
})