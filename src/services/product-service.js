const Product = require('../models/product-model')
module.exports.store = async ({ name, description, price }) => {
    const product = new Product({
        name,
        description,
        price,
    })
    await product.save()
    return product
}
