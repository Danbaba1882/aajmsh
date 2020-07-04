const mongoose = require('mongoose')
const schema = mongoose.Schema;

const product = new schema({
    shop: String,
    name: String,
    category: String,
    subcategory1: String,
    subcategory2: String,
    brand: String,
    features: String,
    description: String,
    images: [],
    productData: String,
    productSpec: String,
    cimage: []
})

module.exports = mongoose.model('Product', product);