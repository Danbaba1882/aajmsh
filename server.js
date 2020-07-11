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
    const allproducts = await Product.find({});
    const categories = await Category.find({});
    const subcat1 = await Subcategory1.find({});
    const subcat2 = await Subcategory2.find({});
    const brand = await Brand.find({});
    const color = await Color.find({});
    const listers = await Lister.find({});
    const sp = await Product.find({category:"Smartphones"})
    const tab = await Product.find({category:"Tablets"})
    const mp = await Product.find({category:"Mobile Phones"})
    const sw = await Product.find({subcategory2:"Smart Watches"})
    const tv = await Product.find({subcategory1:"Tvs"})
    const eles = await Product.find({subcategory1:"Electric Scooter"})
    const cam = await Product.find({category:"Cameras"})
    const mac = await Product.find({category:"Mobile Accessories"})
    const caa = await Product.find({category:"Computer and Accessories"})
    const sh = await Product.find({category:"Smart Homes"})
    const pca = await Product.find({subcategory1:"PC Accessories"})
    const net = await Product.find({subcategory1:"Networking"})
    const pink = await Product.find({subcategory1:"Printers and Ink"})
    const dslr = await Product.find({subcategory1:"DSLR Cameras"})
    const xes = await Product.find({subcategory1:"Xiaomi Electric Scooter"})
    const wear = await Product.find({subcategory1:"Wearables"})
    const chargers = await Product.find({subcategory1:"Chargers"})
    const crac = await Product.find({subcategory1:"Car Accessories"})
    const speakers = await Product.find({subcategory1:"Speakers"})
    const cables = await Product.find({subcategory1:"Cables"})
    const pb = await Product.find({subcategory1:"Powerbanks"})
    const snscot = await Product.find({subcategory1:"Segway Ninebot Electric Scooter"})
    const meles = await Product.find({subcategory1:"MI Electric Scooter"})
    const lap = await Product.find({subcategory1:"Laptops"})
    const desc = await Product.find({subcategory1:"Desktop Computers"})
    const ht = await Product.find({subcategory1:"Home Theartres"})
    const proj = await Product.find({subcategory1:"Projectors"})
    const vgc = await Product.find({subcategory1:"Video, Games and Consoles"})
    const wch = await Product.find({subcategory2:"Wall Charger"});
    const mpch = await Product.find({subcategory2:"Multi port Charger"});
    const wrch = await Product.find({subcategory2:"Wireless Charger"});
    const swatch = await Product.find({subcategory2:"Smart Watches"});
    const sband = await Product.find({subcategory2:"Smart Bands"});
    const cch = await Product.find({subcategory2:"Car Charger"});
    const hol = await Product.find({subcategory2:"Holders"});
    const wandb = await Product.find({subcategory2:"Wireless and Bluetooths"});
    const ebie = await Product.find({subcategory2:"Ear Buds and In-Ear"});
    const oeoe = await Product.find({subcategory2:"On-Ear and Over-Ear"});
    const khp = await Product.find({subcategory2:"Kids Headphones"});
    const pcgh = await Product.find({subcategory2:"PC Gaming Headsets"});
    const mouse = await Product.find({subcategory2:"Mouse"});
    const kb = await Product.find({subcategory2:"Keyboards"});
    console.log(kb.length)
    const mon = await Product.find({subcategory2:"Monitors"});
    const mb = await Product.find({subcategory2:"Mother Board"});
    const proc = await Product.find({subcategory2:"Processor"});
    const ram = await Product.find({subcategory2:"Ram"});
    const hd = await Product.find({subcategory2:"Hard Disk"});
    const pd = await Product.find({subcategory2:"Pen Drives"});
    const cc = await Product.find({subcategory2:"Computer Cases"});
    const pcs = await Product.find({subcategory2:"PC Speakers"});
    const stv = await Product.find({subcategory2:"Smart Tvs"});
    const ctv = await Product.find({subcategory2:"Curved Tvs"});
    const fktv = await Product.find({subcategory2:"4K UltraHD Tvs"});
    const ltv = await Product.find({subcategory2:"LED Tvs"});
    const otv = await Product.find({subcategory2:"OLED Tvs"});
    const ps = await Product.find({subcategory2:"Play Stations"});
    const xb = await Product.find({subcategory2:"Xbox"});
    const gc = await Product.find({subcategory2:"Gaming Consoles"});
    const ga = await Product.find({subcategory2:"Gaming Accessories"});
    const iphone = await Product.find({brand:"Iphone"});
    const asus = await Product.find({brand:"Asus"});
    const realme = await Product.find({brand:"Real me"});
    const honor = await Product.find({brand:"Honor Mobile Phones"});
    const oppo = await Product.find({brand:"Oppo"});
    const lenovo = await Product.find({brand:"Lenovo"});
    const nokia = await Product.find({brand:"Nokia"});
    const nubia = await Product.find({brand:"Nubia"});
    const blackshark = await Product.find({brand:"Black Shark"});
    const huawei = await Product.find({brand:"Huawei"});
    const samsung = await Product.find({brand:"Samsung Nobile Phones"});
    const xiaomi = await Product.find({brand:"Xiaomi Mobile phones"});
    const amazfit = await Product.find({brand:"Amazfit"});
    const oneplus = await Product.find({brand:"One Plus"});
  
    console.log(categories);
    console.log('is working');
    console.log(subcat2)
    res.send({allproducts, categories,subcat1, subcat2, brand,color,listers,sp,mp,tab,sw,tv,eles,cam,mac,caa,sh,
    pca, net, pink, dslr, xes, wear, chargers, crac, speakers,
    cables, pb, snscot, meles, lap, desc, ht, proj, vgc,
     wch, mpch, wrch, swatch, sband, cch, hol, wandb, ebie, oeoe, khp, pcgh, mouse, kb, mon, mb,
    proc, ram, hd, pd, cc, pcs, stv, ctv, fktv, ltv, otv, ps, xb, gc,ga,
    iphone, nokia, nubia,asus,oneplus,amazfit,xiaomi,samsung,huawei,blackshark,lenovo,oppo,honor,realme
    });
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
      cb(null, 'noordeal/dist/testtt/assets/productsimages/')
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
        saleprice: req.body.saleprice,
    regularprice: req.body.regularprice,
    taxstatus: req.body.taxstatus,
    taxclass: req.body.taxclass,
    downloadable: req.body.downloadable,
    virtual: req.body.virtual,
    solditems: req.body.solditems,
    salequantity : req.body.salequantity,
    warranty: req.body.warranty,
    upc: req.body.upc,
    color: req.body.color,
    capacity: req.body.capacity,
    cable: req.body.cable,
    ram: req.body.ram,
    ptype: req.body.ptype,
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

const lister = new schema({
    username:String,
    password:String
})

const Lister = mongoose.model('lister',lister);

noordeal.post('/api/addlister', async (req,res)=>{
    const lister = new Lister({
        username:req.body.username,
        password:req.body.password
    }) 
    await Lister.create(lister).then((p)=>{
        console.log(p)
    })
    res.json({success: true})
})

noordeal.get('/api/listers/*', async (req, res)=>{
    console.log('lister is working')
 const listers = await Lister.find({})
 console.log(listers);
})


noordeal.post('/api/adminlogin', async (req,res) =>{
    console.log(req.body)
    const admin = await Lister.findOne({username: req.body.username})
    if (!admin) return res.send({success: 'una'})


    const validpassword = admin.password;
    console.log(validpassword);
    if (req.body.password==validpassword) return res.send({success: true})
    else
    return res.send({success:'incp'})
})

noordeal.listen(process.env.PORT || 3000)
console.log('server is listening at port 3000');