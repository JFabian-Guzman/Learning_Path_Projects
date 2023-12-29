import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const port = process.env.PORT/*Port in file .env*/ || 5000;/*Local host*/
// Connect to MongoDB
connectDB();
// Initialize express
const app = express();
// First route
app.get( '/' , (req,res) => {
  // Send text to the route
  res.send('API is runnig...');
});

// When /api/products is in use automatically will go to the file productRoutes
app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));