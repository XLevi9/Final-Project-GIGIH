const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('/products/:videoId', productController.getProducts);

module.exports = router;