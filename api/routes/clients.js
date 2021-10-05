const express = require('express');
const router = express.Router();

const {
  signup,
  login,
  getAllClients
} = require('../controllers/clients');

// Routes
router.post('/signup', signup);
router.post('/login', login);
router.get('/', getAllClients);

module.exports = router;