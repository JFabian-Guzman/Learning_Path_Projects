import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import House from '../models/houseModel.js';

const router = express.Router();  // Create a new router

// Send the response to the path /api/houses
router.get('/',asyncHandler(async (req, res) => {
  const houses = await House.find({});
  res.json(houses);
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const house = await House.findById(req.params.id);

  if (house) {
    res.json(house);
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
}));


export default router;