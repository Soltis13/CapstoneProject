const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');

// Load User model
const User = require('../../models/User');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

module.exports = router;
