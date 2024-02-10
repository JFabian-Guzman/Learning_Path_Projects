import asyncHandler from '../middleware/asyncHandler.js'
import Agent from '../models/agentModel.js';

// @desc    Fetch all agents
// @route   GET /api/agents
// @access  Public 
const getAgents = asyncHandler(async (req, res) => { 
  const agents = await Agent.find({});
  res.json(agents);
});

// @desc    Fetch single agent
// @route   GET /api/agents/:id
// @access  Public
const getAgentById = asyncHandler(async (req, res) => {
  const agent = await Agent.findById(req.params.id);

  if (agent) {
    res.json(agent);
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

export { getAgents, getAgentById };