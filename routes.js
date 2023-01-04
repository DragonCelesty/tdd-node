const express = require('express')

const { createProduct } = require('./src/controllers/product-controller')

const router = express.Router()

router.post('/products', createProduct)

module.exports.router = router
