import express from 'express';
import { getProducts, getProductById, createHouse } from '../controllers/houseController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();  // Create a new router

router.route('/')
  .get(getProducts) // Get all houses
  .post(protect, createHouse);  // Create a new house
router.route('/:id').get(getProductById);  // Get a single house


export default router;