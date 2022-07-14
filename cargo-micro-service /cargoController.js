const Cargo=require('./cargo-model');
const axios = require('axios');
const { response } = require('./app');



//getting data operation endpoint

exports.getAllCargos=async(req,res)=>{   
     const Cargos=await Cargo.find();
     //const {data}=await axios.get('http://127.0.0.1:7000/api/v1/driver');
    
    try{
        res.status(200).json({
        status:"success",
        data:{
        Cargos,
        
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


exports.getCargo=async(req,res)=>{
    const cargo=await Cargo.findById(req.params.id);
    try{
        res.status(200).json({
        status:"success",
        data:{
        cargo
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


exports.createCargo=async (req,res)=>{
    console.log(req.body);

try{
    const newCargo=await Cargo.create(req.body);
    res.status(201).json({
        status:"Sucessfull data entry",
        data:{
            Cargo:newCargo
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

exports.updateCargo=async (req,res)=>{
    try{
        const updatedCargo=await Cargo.findByIdAndUpdate(req.params.id,req.body);
      res.status(200).json({
        status:"Cargo Update Successfull",
        data:updatedCargo
      })
    }catch(err){
        res.status(404).json({
            status:"Update Failed",
            message:`erro ${err}`
        });
    }
}


exports.updateCargo=async (req,res)=>{
    try{
        const updatedCargo=await Cargo.findByIdAndUpdate(req.params.id,req.body);
      res.status(200).json({
        status:"Cargo Update Successfull",
        data:updatedCargo
      })
    }catch(err){
        res.status(404).json({
            status:"Update Failed",
            message:`erro ${err}`
        });
    }
}

//delete operation endpoint

exports.deleteCargo=async(req,res)=>{
    try{
        await Cargo.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:"Cargo Information deleted succesfully..!",
        });
    }catch(err){
        res.status(400).json({
            status:"Delete opaeration failed..!",
            message:`Error ${err}`
        });
    }
};

