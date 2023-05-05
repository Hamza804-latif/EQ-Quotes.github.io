import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DatabaseServer = async () => {
  try {
    mongoose.set("strictPopulate", false);
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("database conected successfully");
  } catch (error) {
    console.log("Something went wrong in databse connection", error.message);
  }
};

export default DatabaseServer;
