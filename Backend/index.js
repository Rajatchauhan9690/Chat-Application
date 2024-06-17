import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRouter from "./routes/userRoute.js";
import messageRouter from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
dotenv.config({});
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;
//middlewares
app.use(express.json());
app.use(cookieParser());
//routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/message", messageRouter);

app.listen(PORT, () => {
  console.log(`servr is listen at ${PORT}`);
});
