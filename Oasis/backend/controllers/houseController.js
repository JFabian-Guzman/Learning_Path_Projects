import asyncHandler from '../middleware/asyncHandler.js'
import House from '../models/houseModel.js';

// @desc    Fetch all houses
// @route   GET /api/houses
// @access  Public 
const getProducts = asyncHandler(async (req, res) => { 
  const houses = await House.find({});
  res.json(houses);
});

// @desc    Fetch single house
// @route   GET /api/houses/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const house = await House.findById(req.params.id);

  if (house) {
    res.json(house);
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

export { getProducts, getProductById };