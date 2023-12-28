import mongoose from "mongoose";

/*
  Is async because any methods from mongoose will return a 
  promise, so you should do a catch syntax or async
*/
const connectDB = async () => { 
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    // Exit process with error
    process.exit(1);
  }
};

export default connectDB