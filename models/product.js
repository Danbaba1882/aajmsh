const mongoose = require('mongoose')
const schema = mongoose.Schema;

const product = new schema({
    shop: String,
    name: String,
    category: String,
    Subcategory1: String,
    Subcategory2: String,
    brand: String,
    price: Number,
    quantity: Number,
    features: [],
    description: [],
    dimages: [],
    images: [],
    color: String,
    capacity: String,
    ram: String
})

module.exports = mongoose.model('Product', product);