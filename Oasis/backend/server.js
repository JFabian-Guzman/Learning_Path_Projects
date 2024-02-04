import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import houses from './data/houses.js';

connectDB(); // Connect to the database

const port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});
// Send the response to the path /api/houses
app.get('/api/houses', (req, res) => {
  res.json(houses);
});

app.get('/api/houses/:id', (req, res) => {
  const house = houses.find((h) => h._id === req.params.id);
  res.json(house);
});

app.listen(port, () => {
  console.log(`Server is running at PORT: ${port}`);
});