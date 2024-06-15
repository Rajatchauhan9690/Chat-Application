import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import router from "./routes/userRoute.js";
dotenv.config({});
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;
//middlewares
app.use(express.json());
//routes
app.use("/api/v1/user", router);
app.listen(PORT, () => {
  console.log(`servr is listen at ${PORT}`);
});
