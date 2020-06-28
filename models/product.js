const mongoose = require('mongoose')
const schema = mongoose.Schema;

const product = new schema({
    shop: String,
    name: String,
    category: String,
    Subcategory1: String,
    Subcategory2: String,
    brand: String,
    features: String,
    description: String,
    images: [],
    productData: String,
    productSpec: String,
    cimage: []
})

module.exports = mongoose.model('Product', product);