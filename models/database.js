const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1:27017/NOORDEAL'
MONGOURI = 'mongodb+srv://danbaba1882:NAZIR1882@megaincomedb-wqmxa.mongodb.net/NOORDEAL-DATABASE';
const mongoOptions={useNewUrlParser : true, useUnifiedTopology: true};
mongoose.connect(process.env.MONGODBURI || URI, mongoOptions);
mongoose.connection.on('open',()=>{
    console.log('server has been connected to database');
    });