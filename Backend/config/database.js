import mongoose from "mongoose";
const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Databse Connected Successful");
    })
    .catch((error) => {
      consolr.log(error);
    });
};

export default connectDB;
