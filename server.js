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
const paypal = require('paypal-rest-sdk')
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
    'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM'
  });


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

noordeal.post('/api/checkout', (req,res)=>{
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://return.url",
            "cancel_url": "http://cancel.url"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "item",
                    "price": "1.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "1.00"
            },
            "description": "This is the payment description."
        }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            console.log("Create Payment Response");
            console.log(payment);
        }
    });
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

noordeal.post('/api/upload', upload.fields([{name:'images'}, {name: 'cimage'}]), async (req, res)=>{
    console.log('kkkkkk',req.body);
    console.log(req.files)
    const product = new Product({
        shop: 'noordeal',
        name: req.body.name,
        category: req.body.ucategory,
        subcategory1: req.body.subcategory1,
        subcategory2: req.body.subcategory2,
        brand: req.body.brand,
        features: req.body.features,
        description: req.body.description,
        images: req.files.images,
        color: req.body.color,
        productData: req.body.productdata,
        productSpec: req.body.productspec,
        cimage: req.files.cimage
        

    })

    await Product.create(product).then((p)=>{
        console.log(p)
    })
       data = {
           success: true
       }
res.json(data);
    
})

noordeal.listen(process.env.PORT || 3000)
console.log('server is listening at port 3000');