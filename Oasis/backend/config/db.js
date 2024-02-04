import mongoose from "mongoose";

const connectDB = async () => { 
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // If the connection is successful, log the host
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;