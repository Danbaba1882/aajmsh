const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1:27017/GURUSCABAL'
const mongoOptions={useNewUrlParser : true, useUnifiedTopology: true};
mongoose.connect(URI, mongoOptions);
mongoose.connection.on('open',()=>{
    console.log('server has been connected to database');
    });