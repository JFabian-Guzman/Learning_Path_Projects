import asyncHandler from "../middleware/asyncHandler.js";
import Product from '../models/productModel.js'

//@desc Fetch all products
//@route GET/api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  // Pass an empty object({}) because it will get all of them
  const products = await Product.find({})
  // Send a json response with the products
  res.json(products);
});

//@desc Fetch a product
//@route GET/api/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {
  // Search products
  const product = await Product.findById(req.params.id);
  // If the product is find then return it in json format
  if(product){
    return res.json(product);
  }
  res.status(404);
  throw new Error('Resource not found');
});

export { getProducts, getProductById };