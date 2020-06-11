const mongoose = require('mongoose')
const schema = mongoose.Schema;

const users = new schema({
    email: String,
    username: String,
    password: String
})

module.exports = mongoose.model('Users', users);