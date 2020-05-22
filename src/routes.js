const express = require('express');
const router = express.Router();

const Product = require('./controllers/Product')

router.get('/products', Product.index)
router.get('/product/:id', Product.show)
router.post('/products', Product.store)
router.put('/product/:id', Product.update)
router.delete('/product/:id', Product.destroy)

module.exports = router;