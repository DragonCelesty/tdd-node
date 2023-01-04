const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: String,
})

const Product = mongoose.model('products', productSchema)
module.exports = Product
