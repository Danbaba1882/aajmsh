const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const noordeal = express();
// const database = require('./models/database');
// const User = require('./models/Users')


noordeal.use(bodyparser.json());
noordeal.use(bodyparser.urlencoded({extended: true}));
noordeal.use(express.static(__dirname+'/noordeal/dist/testtt'));
noordeal.use('/*', express.static(__dirname+'/noordeal/dist/testtt/index.html'));






noordeal.post('/api/register', (req,res)=>{
})

noordeal.listen(process.env.PORT || 3000)
console.log('server is listening at port 3000');