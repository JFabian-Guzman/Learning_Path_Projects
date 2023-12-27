import express from 'express';
import products from './data/products.js'
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT/*Port in file .env*/ || 5000;/*Local host*/
// Initialize express
const app = express();
// First route
app.get( '/' , (req,res) => {
  // Send text to the route
  res.send('API is runnig...');
});

app.get('/api/products' /*Path*/, (req,res) => {
  // Send a json response with the products
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find( (p) => p._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`Server running on port ${port}`));