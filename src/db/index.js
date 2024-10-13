import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectionDB = async () => {
  try {
    const DB = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("Mongo DB Connected");
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1);
  }
};
export default connectionDB;
