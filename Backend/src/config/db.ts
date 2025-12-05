import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Local MongoDB Connected ✔");
  } catch (err) {
    console.error("MongoDB Error:", err);
    process.exit(1);
  }
};

export default connectDB;

