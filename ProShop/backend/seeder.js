import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // Delete everything
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    // Add users
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    // Add products
    const sampleProducts = products.map( (product) => {
      // It will have all product data + user _id
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red);
    process.exit(1);
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.green.inverse);
    process.exit()
  } catch (error) {
    console.error(`${error}`.red);
    process.exit(1);
  }
}

if ( process.argv[2] === '-d' ) {
  destroyData();
} else {
  importData();
}