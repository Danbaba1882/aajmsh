const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1:27017/NOORDEAL'
MONGODB_URI = 'mongodb+srv://danbaba1882:NAZIR1882@megaincomedb-wqmxa.mongodb.net/NOORDEAL-DATABASE';
const mongoOptions={useNewUrlParser : true, useUnifiedTopology: true};
mongoose.connect(process.env.MONGODB_URI || URI, mongoOptions);
mongoose.connection.on('open',()=>{
    console.log('server has been connected to database');
    });