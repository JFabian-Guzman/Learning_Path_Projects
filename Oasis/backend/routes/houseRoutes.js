import express from 'express';
import { getProducts, getProductById } from '../controllers/houseController.js';

const router = express.Router();  // Create a new router

router.route('/').get(getProducts);  // Get all houses
router.route('/:id').get(getProductById);  // Get a single house


export default router;