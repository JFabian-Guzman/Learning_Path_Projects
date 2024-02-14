import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import houseRoutes from './routes/houseRoutes.js';
import userRoutes from './routes/userRoutes.js';
import agentRoutes from './routes/agentRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
const port = process.env.PORT || 5000;

connectDB(); // Connect to the database

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser()); // Allow to use req.cookies

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/houses', houseRoutes);
app.use('/api/users', userRoutes);
app.use('/api/agents', agentRoutes);
app.use('/api/upload', uploadRoutes);

  // Make image folder static
  const __dirname = path.resolve();
  app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at PORT: ${port}`);
});