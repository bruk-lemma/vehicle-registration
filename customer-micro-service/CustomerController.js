const Customer=require('./customer-model');
const axios = require('axios');
const { response } = require('./app');



//getting data operation endpoint

exports.getAllCustomers=async(req,res)=>{   
     const Customers=await Customer.find();
    // const {data}=await axios.get('http://127.0.0.1:7000/api/v1/driver');
    
    try{
        res.status(200).json({
        status:"success",
        data:{
        Customers,
        
        }
        });
    }catch(err){
        res.status(400).json({
            status:"fail",
            message:`error ${err}`
        });
        console.log(err);
    }
};


exports.getCustomer=async(req,res)=>{
    const customer=await Customer.findById(req.params.id);
    try{
        res.status(200).json({
        status:"success",
        data:{
        customer
        }
        });
    }catch(err){
        res.status(400).json({
            status:"fail",
            message:`error ${err}`
        });
        console.log(err);
    }
};

//create operation endpoint


exports.createCustomer=async (req,res)=>{
    console.log(req.body);

try{
    const newCustomer=await Customer.create(req.body);
    res.status(201).json({
        status:"Sucessfull data entry",
        data:{
            Vehicle:newCustomer
        }
    });
}catch(err){
    res.status(400).json({
        status:"Data entry Failed",
        message:`error ${err}`
    });
}    

};

//update operation endpoint

exports.updateCustomer=async (req,res)=>{
    try{
        const updatedCustomer=await Customer.findByIdAndUpdate(req.params.id,req.body);
      res.status(200).json({
        status:"Customer Update Successfull",
        data:updatedCustomer
      })
    }catch(err){
        res.status(404).json({
            status:"Update Failed",
            message:`erro ${err}`
        });
    }
}


exports.updateCustomer=async (req,res)=>{
    try{
        const updatedCustomer=await Customer.findByIdAndUpdate(req.params.id,req.body);
      res.status(200).json({
        status:"Customer Update Successfull",
        data:updatedCustomer
      })
    }catch(err){
        res.status(404).json({
            status:"Update Failed",
            message:`erro ${err}`
        });
    }
}

//delete operation endpoint

exports.deleteCustomer=async(req,res)=>{
    try{
        await Customer.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:"Customer Information deleted succesfully..!",
        });
    }catch(err){
        res.status(400).json({
            status:"Delete opaeration failed..!",
            message:`Error ${err}`
        });
    }
};

