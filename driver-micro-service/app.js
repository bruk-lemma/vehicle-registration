const express=require('express');
const morgan=require('morgan');
const driverRouter=require('./driver-route');
const axios=require('axios');

const app=express();

app.use(express.json());
app.use((req,res,next)=>{
console.log("hello from middleware!!" +req.url);
next();
});



app.use('/api/v1/driver',driverRouter);

module.exports=app;