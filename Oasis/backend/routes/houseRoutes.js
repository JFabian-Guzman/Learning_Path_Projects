import express from 'express';
import { 
  getProducts,
  getProductById,
  createHouse,
  getLastHouses
} from '../controllers/houseController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();  // Create a new router

router.route('/')
  .get(getProducts) // Get all houses
  .post(protect, createHouse);  // Create a new house
router.route('/last').get(getLastHouses);  // Get last posted houses
router.route('/:id').get(getProductById);  // Get a single house


export default router;