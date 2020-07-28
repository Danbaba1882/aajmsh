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
    saleprice: [],
    regularprice: [],
    taxstatus: String,
    taxclass: String,
    downloadable: String,
    virtual: String,
    solditems: [],
    salequantity : [],
    warranty: String,
    upc: String,
    color: [],
    capacity: [],
    cable:[],
    ptype: String,
    cimage: [],
    date: {type: Date,default: Date.now()}
})

module.exports = mongoose.model('Product', product);