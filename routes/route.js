const express = require('express');
const router = express.Router();
const { index, charge}  = require('../controller/controller');

//routes
router.get('/', index );
router.post('/charge', charge );

module.exports = router;