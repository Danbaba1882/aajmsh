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
    saleprice: Number,
    regularprice: Number,
    taxstatus: String,
    taxclass: String,
    downloadable: String,
    virtual: String,
    solditems: Number,
    salequantity : Number,
    warranty: String,
    upc: String,
    color: String,
    capacity: String,
    cable: String,
    ram: String,
    ptype: String,
    cimage: [],
    date: {type: Date,default: Date.now()}
})

module.exports = mongoose.model('Product', product);