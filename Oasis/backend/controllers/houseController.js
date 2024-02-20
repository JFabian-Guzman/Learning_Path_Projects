import asyncHandler from '../middleware/asyncHandler.js'
import House from '../models/houseModel.js';

// @desc    Fetch all houses
// @route   GET /api/houses
// @access  Public 
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 12;
  // Request the page number in the URL
  const page = Number(req.query.pageNumber) || 1;
  // Check if there is a keyword in the URL
  const keyword = req.query.keyword ? {
    // $or is an array of objects to match the keyword, in this case, city and county
    $or: [
      {
        city: {
          /* 
            regex is neceseary to match just a part of the word
            example: if the word is "house" and the keyword is "ho"
            the word will be matched
          */
          $regex: req.query.keyword,
          // $options: 'i' is to make the search case insensitive
          $options: 'i',
        },
      },
      {
        county: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    ]
  } : {};
  // Count the total number of elements
  const count = await House.countDocuments({...keyword});
  // Set limit & skip to get the correct elements
  const houses = await House.find({...keyword})
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  // Pages = total elements / elements per page
  res.json({houses, page, pages: Math.ceil(count / pageSize)});
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