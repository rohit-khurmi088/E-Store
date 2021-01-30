const express = require('express');
const router = express.Router();

const path = require('path');

const products = [{title:'Angular11'}];

//====================
// ADD PRODUCT 
//====================
//GET: Add Product
//URL: /admin/add-product
router.get('/add-product', (req,res,next)=>{
    //res.sendFile(path.join(__dirname,'../','views','add-product.html'));
    res.render('add-product',{
        path: '/admin/add-product',
        pageTitle:'Add Product',
  
    });
});

//POST: Add Product
//URL: /admin/product
router.post('/product', (req,res,next)=>{
    //Added Product
    //console.log(req.body);
    products.push({title: req.body.title});
    //redirect to HomePage
    res.redirect('/'); 
});


//module.exports = router;
//module.exports = products;

//exports = adminData (Say)
//adminData.routes = routes
//adminData.products = products
exports.routes = router;
exports.products = products;