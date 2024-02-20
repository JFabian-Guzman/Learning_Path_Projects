import asyncHandler from '../middleware/asyncHandler.js'
import Agent from '../models/agentModel.js';

// @desc    Fetch all agents
// @route   GET /api/agents
// @access  Public 
const getAgents = asyncHandler(async (req, res) => {
  const pageSize = 5;
  // Request the page number in the URL
  const page = Number(req.query.pageNumber) || 1;
  // Check if there is a keyword in the URL
  const keyword = req.query.keyword ? {
    name: {
      /* 
        regex is neceseary to match just a part of the word
        example: if the word is "house" and the keyword is "ho"
        the word will be matched
      */
      $regex: req.query.keyword,
      // $options: 'i' is to make the search case insensitive
      $options: 'i',
    },
  } : {};
  // Count the total number of elements
  const count = await Agent.countDocuments({...keyword});
  // Set limit & skip to get the correct elements
  const agents = await Agent.find({...keyword})
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  // Pages = total elements / elements per page
  res.json({agents, page, pages: Math.ceil(count / pageSize)});
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