const express = require('express');
const router = express.Router();

const signInController = require('../controllers/SignInController');

router.get('/', signInController.index)

module.exports = router;