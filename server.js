const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const multer = require('multer');
const mongoose = require('mongoose')
const schema = mongoose.Schema;
const fs = require('fs');
const cors = require('cors');
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
    console.log('from upload page');
    const allproducts = await Product.find({}).sort({"_id":-1});
    const categories = await Category.find({});
    const subcat1 = await Subcategory1.find({});
    const subcat2 = await Subcategory2.find({});
    const brand = await Brand.find({});
    const color = await Color.find({});
    console.log(categories);
    console.log('is working');
    res.send({allproducts, categories,subcat1, subcat2, brand,color});
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
    console.log('register')
console.log(req.body)
})

noordeal.post('/api/login', (req,res)=>{
    console.log('registerrrrrrrrrrrrrrrrrr')
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
        console.log('database products', p)
    })
       data = {
           success: true
       }
res.json(data);
    
})
// category
const category = new schema({
    category: String
})
const Category = mongoose.model('category',category);

noordeal.post('/api/category', async (req,res)=>{
    console.log(req.body)
    const category = new Category({
        category:req.body.category
    })
    await Category.create(category).then((p)=>{
        console.log(p)
    })
res.json({success: true})
})

//subcategory1
const subcategory1 = new schema({
    subcategory1: String
})
const Subcategory1 = mongoose.model('subcategory1',subcategory1);

noordeal.post('/api/subcategory1', async (req,res)=>{
    console.log(req.body)
    const subcategory1 = new Subcategory1({
        subcategory1:req.body.subcategory1
    })
    await Subcategory1.create(subcategory1).then((p)=>{
        console.log(p)
    })
    res.json({success: true})
})

// subcategory2
const subcategory2 = new schema({
    subcategory2: String
})
const Subcategory2 = mongoose.model('subcategory2',subcategory2);

noordeal.post('/api/subcategory2', async (req,res)=>{
    console.log(req.body)
    const subcategory2 = new Subcategory2({
        subcategory2:req.body.subcategory2
    })
    await Subcategory2.create(subcategory2).then((p)=>{
        console.log(p)
    })
    res.json({success: true})
})

// brand
const brand = new schema({
    brand: String
})
const Brand = mongoose.model('brand',brand);
noordeal.post('/api/brand', async (req,res)=>{
    console.log(req.body)
    const brand = new Brand({
        brand:req.body.brand
    })
    await Brand.create(brand).then((p)=>{
        console.log(p)
    })
    res.json({success: true})
})

// color
const color = new schema({
    color: String
})
const Color = mongoose.model('color',color);

noordeal.post('/api/color', async (req,res)=>{
    console.log(req.body)
    const color = new Color({
        color:req.body.color
    })
    await Color.create(color).then((p)=>{
        console.log(p)
    })
    res.json({success: true})
})

noordeal.get('/api/getttt/', (req, res)=>{
    console.log('sssssssssssssssssssssssss')
})

noordeal.get('/api/uploads', async (req, res)=>{
    console.log('all is well')
    res.send('ok')
})

noordeal.listen(process.env.PORT || 3000)
console.log('server is listening at port 3000');