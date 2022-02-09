const express = require('express');
const User = require('../models/users');

const router = express.Router();

router.post('/register', (req, res) => {
  res.send('')
});

module.exports = router;
