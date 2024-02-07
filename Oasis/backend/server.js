import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import houseRoutes from './routes/houseRoutes.js';
const port = process.env.PORT || 5000;

connectDB(); // Connect to the database

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/houses', houseRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at PORT: ${port}`);
});