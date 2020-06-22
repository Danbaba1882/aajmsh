const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const multer = require('multer');
const fs = require('fs');
cors = require('cors');
const noordeal = express();
const database = require('./models/database');
const User = require('./models/Users')
const Product = require('./models/product')


noordeal.use(bodyparser.json());
noordeal.use(cors());
noordeal.use(bodyparser.urlencoded({extended: true}));
noordeal.use(express.static(__dirname+'/noordeal/dist/testtt'));
noordeal.use('/*', express.static(__dirname+'/noordeal/dist/testtt/index.html'));

noordeal.get('/api/*', async function(req,res){
    const allproducts = await Product.find({}).sort({"_id":-1});
    console.log(allproducts, 'is working');
    res.json(allproducts);
})

noordeal.post('/api/register', (req,res)=>{
console.log(req.body)
})

noordeal.post('/api/login', (req,res)=>{
})

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'noordeal/src/assets/productsimages/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  var upload = multer({ storage: storage })

noordeal.post('/api/upload', upload.fields([{name:'images'},{name: 'dimages'}, {name: 'cimage'}]), async (req, res)=>{
    console.log(req.body);
    console.log(req.files)
    const product = new Product({
        shop: 'noordeal',
        name: req.body.name,
        category: req.body.ucategory,
        subcategory1: req.body.subcategory1,
        subcategory2: req.body.subcategory2,
        brand: req.body.brand,
        price: req.body.price,
        quantity: req.body.price,
        features: req.body.features,
        description: req.body.description,
        dimages: req.files.dimages,
        images: req.files.images,
        color: req.body.color,
        capacity: req.body.capacity,
        ram: req.body.ram,
        cimage: req.files.cimage,
        date: {type: Date,default: Date.now()},

    })

    await Product.create(product).then((p)=>{
        console.log(p)
    }).catch((err)=>{
        if (err){
            res.send(err)
        }
        else{

                  res.json({
                      success: true
                  })
              
        }
    })
    
})

noordeal.listen(process.env.PORT || 3000)
console.log('server is listening at port 3000');