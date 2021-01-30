const express = require('express');
const morgan = require('morgan');

const path = require('path');

//EXPRESS BoilerPlate (for GET,POST,PUT,DELETE requests)
const app = express();

//====================
// MIDDLEWARE
//====================
//MORGAN (3rd Party Middleware): logs req. into console
//only run in development mode
app.use(morgan('dev'));

//bodyParser (To pass form data into req.body)
//extended:true => string/array type
//extended:false => any type
app.use(express.urlencoded({extended:true})); 
app.use(express.json()); 


//SERVING Static files
app.use(express.static(path.join(__dirname,'assets'))); //OR ('./assets)

//TEMPLATE ENGINE 
//----- PUG ----- (built in)
app.set('view engine', 'pug');
app.set('views','views');

//---- EJS ----- (built in)
//app.set('view engine','ejs');
//app.set('views', path.join(__dirname,'views')); //OR (./views)


//======================
// ROUTING
//=======================
const adminData = require('./routes/admin'); //adminRoutes
const shopRoutes = require('./routes/shop'); //shopRoutes

app.use('/admin', adminData.routes);
app.use('/', shopRoutes); 


//Error Handling Routes
app.all("*",(req,res,next)=>{
    //res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    res.status(404).render('404', {pageTitle:'Page Not Found'});
});



//Exporting app.js -> server.js
module.exports = app;