const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const guruscabal = express();
const database = require('./models/database');
const User = require('./models/Users')
const http = require('http');
const server = http.Server(guruscabal);

const socketIO = require('socket.io');
const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('new-message', (message) => {
        console.log(message);
        io.emit(message);
        });
});

guruscabal.use(bodyparser.json());
guruscabal.use(bodyparser.urlencoded({extended: true}));

guruscabal.get('/',(req,res)=>{
res.send('server is working')
})

guruscabal.post('/api/register', (req,res)=>{
    const users = new User({
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    })
   
    User.create(users).then((savedUser)=>{
        console.log('Saved '+ savedUser.username)
    }).catch((err)=>{
        if (err){
            res.send(err)
        }
    })
    res.send('saved succesfully')
})

guruscabal.post('/api/login', async (req,res)=>{
    const reqpassword= req.body.password
    const regUser = await User.findOne({username:req.body.username})
    console.log(regUser)
    const regPassword = regUser.password

    if(reqpassword===regPassword){
console.log('user found')
res.json({
    success: true,
    message: 'found'
})
    }
    else{
        console.log('Passwords do not match')
    }

})

server.listen(3000)
console.log('server is listening at port 3000');