import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import uploadRoutes from './routes/uploadRoutes.js';

const port = process.env.PORT/*Port in file .env*/ || 5000;/*Local host*/
// Connect to MongoDB
connectDB();
// Initialize express
const app = express();

// Body parser 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser()); // This hel us acces jwt

// First route
app.get( '/' , (req,res) => {
  // Send text to the route
  res.send('API is runnig...');
});

// When /api/products is in use automatically will go to the file productRoutes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) => res.send(
  {clientId: process.env.PAYPAL_CLIENT_ID}
));

const __dirname = path.resolve(); // Set __dirname to current directory
// Make static upload foalder
app.use('/uploads', express.static(path.join(__dirname,'/uploads')))

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));