const express=require('express');
const morgan=require('morgan');
const vehicleRouter=require('./vehicle-route');
const axios = require('axios');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());
app.use((req,res,next)=>{
console.log("hello from middleware!!" +req.url);
next();
});
 

//console.log(dr.drivers);
app.use('/api/v1/vehicle',vehicleRouter);
/*
app.get('/axi', (req, res) => {
    // get random user api using axios and show it on the page in json
    axios.get('http://127.0.0.1:7000/api/v1/driver') // API url which is getting data
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
});*/
module.exports=app;