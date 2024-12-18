import mongoose from "mongoose";
const MONGO_URI =
  "mongodb+srv://pranu123:pranu123@cluster0.zxrxl3g.mongodb.net/lms";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("error occured", error);
  }
};
export default connectDB;
