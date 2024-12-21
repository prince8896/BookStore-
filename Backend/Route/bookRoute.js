const express = require('express');
const bookController = require('../Controller/bookController');

const router = express.Router();

router.get('/getBook', bookController.getBook);

module.exports = router;
