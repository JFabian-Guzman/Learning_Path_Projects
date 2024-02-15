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

// @desc    Create a houses
// @route   POST /api/houses
// @access  Private 
const createHouse = asyncHandler(async (req, res) => {
  const { 
    city, county, description, price, 
    totalArea, houseArea, bathrooms, bedrooms,
    image, inSale, forRent 
  } = req.body;


  const house = new House({
    user: req.user._id,
    city, 
    county,
    description, 
    price,
    totalArea,
    houseArea,
    bathrooms,
    bedrooms,
    image,
    inSale, 
    forRent,
  });

  const createdHouse = await house.save();
  res.status(201).json(createdHouse);
});

export { getProducts, getProductById, createHouse };