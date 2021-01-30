const { schedulingPolicy } = require('cluster');
const express = require('express');
const router = express.Router();

const path = require('path');

//Sharing Data from admin.js -> shop.js
//products = adminData.products; 
const adminData = require('./admin');

//====================
// SHOP HomePage
//=====================
router.get('/', (req,res,next)=>{
    //res.sendFile(path.join(__dirname,'../','views','shop.html'));

    //pass products -> template
    const products = adminData.products;
    console.log('ShopJs: ', products);
    
    res.render('shop',{
        path:'/',
        prods:products, 
        pageTitle:'Shop'
    });
});



module.exports = router;