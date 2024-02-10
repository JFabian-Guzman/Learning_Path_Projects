import express from 'express';
import { getAgents, getAgentById } from '../controllers/agentController.js';

const router = express.Router();  // Create a new router

router.route('/').get(getAgents);  // Get all agents
router.route('/:id').get(getAgentById);  // Get a single agent


export default router;