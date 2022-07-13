const express=require('express');
const morgan=require('morgan');
const vehicleRouter=require('./vehicle-route');
const axios = require('axios');

const app=express();

app.use(express.json());
app.use((req,res,next)=>{
console.log("hello from middleware!!" +req.url);
next();
});
 

//console.log(dr.drivers);
app.use('/api/v1/vehicle',vehicleRouter);

module.exports=app;