const Vehicle=require('./vehicle-model');

exports.getAllVehicles=async(req,res)=>{
    Vehicles=await Vehicle.find();
    try{
        res.status(200).json({
        status:"success",
        data:{
        Vehicles
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

exports.createVehicle=async (req,res)=>{
    console.log(req.body);

try{
    const newVehicle=await Vehicle.create(req.body);
    res.status(201).json({
        status:"Sucessfull data entry",
        data:{
            Vehicle:newVehicle
        }
    });
}catch(err){
    res.status(400).json({
        status:"Data entry Failed",
        message:`error ${err}`
    });
}    

};

exports.updateVehicle=async (req,res)=>{
    try{
        const updatedVehicle=await Vehicle.findByIdAndUpdate(req.params.id,req.body);
      res.status(200).json({
        status:"vehicle Update Successfull",
        data:updatedVehicle
      })
    }catch(err){
        res.status(404).json({
            status:"Update Failed",
            message:`erro ${err}`
        });
    }
}

exports.deleteVehicle=async(req,res)=>{
    try{
        await Vehicle.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:"Vehicle Information deleted succesfully..!",
        });
    }catch(err){
        res.status(400).json({
            status:"Delete opaeration failed..!",
            message:`Error ${err}`
        });
    }
};
