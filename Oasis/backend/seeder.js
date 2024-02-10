import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import agents from "./data/agents.js";
import houses from "./data/houses.js";
import Agent from "./models/agentModel.js";
import User from "./models/userModel.js";
import House from "./models/houseModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // Before import data delete all the data
    await House.deleteMany();
    await User.deleteMany();
    await Agent.deleteMany();

    const createdUsers = await User.insertMany(users);

    // Get the admin user id
    const adminUser = createdUsers[0]._id;

    // Each house has a user, in this case the admin user
    const sampleHouses = houses.map((house) => {
      return { ...house, user: adminUser };
    });
    // Inset the sampleHouses into the database
    await House.insertMany(sampleHouses);
    // Insert the agents into the database
    await Agent.insertMany(agents);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
}

const destroyData = async () => {
  try {
    // Before destroy data delete all the data
    await House.deleteMany();
    await User.deleteMany();
    await Agent.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
}

if(process.argv[2] === "-d") {
  destroyData();
} else {  
  importData();
}