const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Register a new user
router.post('/register', userController.registerUser);

// Add more routes for user authentication (e.g., login, logout)

module.exports = router;