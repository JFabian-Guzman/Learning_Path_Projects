import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from '../models/productModel.js'

const router = express.Router();

router.get('/' /*Path*/, asyncHandler(async (req,res) => {
  // Pass an empty object({}) because it will get all of them
  const products = await Product.find({})
  // Send a json response with the products
  res.json(products);
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if(product){
    return res.json(product);
  }
  res.status(404);
  throw new Error('Resource not found')
}));

export default router