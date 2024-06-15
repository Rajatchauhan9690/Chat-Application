import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
dotenv.config({});
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`servr is listen at ${PORT}`);
});
