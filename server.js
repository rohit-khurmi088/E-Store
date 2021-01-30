//(Put modules before requiring app -> avaiable in app.js)
const dotenv = require('dotenv').config();
const colors = require('colors');



//========================
// Listen To Server
//=========================
const app = require('./app');

const Port = process.env.PORT || 7100;
app.listen(Port, ()=>{
    console.log(`Server is running in ${process.env.NODE_ENV} on Port: ${Port}`.yellow.bold);
});