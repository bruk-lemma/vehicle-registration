const Driver=require('./driver-model');

//delete operation endpoint

exports.getAllDrivers=async(req,res)=>{
    Drivers=await Driver.find();
    try{
        res.status(200).json({
        status:"success",
        size:`total: ${Drivers.length} drivers`,
        data:{
            Drivers
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



exports.getDriver=async(req,res)=>{
     driver=await Driver.findById(req.params.id);
    try{
        res.status(200).json({
        status:"success",
        size:`name: ${driver.driver_name}`,
        data:{
            driver
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


exports.createDriver=async (req,res)=>{
   // console.log(req.body);

try{
    const newDriver=await Driver.create(req.body);
    res.status(201).json({
        status:"Sucessfull data entry",
        data:{
            Driver:newDriver
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

exports.updateDriver=async (req,res)=>{
    try{
        const updatedDriver=await Driver.findByIdAndUpdate(req.params.id,req.body);
      res.status(200).json({
        status:"vehicle Update Successfull",
        data:updatedDriver
      })
    }catch(err){
        res.status(404).json({
            status:"Update Failed",
            message:`erro ${err}`
        });
    }
}


exports.updateDriver=async (req,res)=>{
    try{
        const updatedDriver=await Driver.findByIdAndUpdate(req.params.id,req.body);
      res.status(200).json({
        status:"vehicle Update Successfull",
        data:updatedDriver
      })
    }catch(err){
        res.status(404).json({
            status:"Update Failed",
            message:`erro ${err}`
        });
    }
}

//delete operation endpoint

exports.deleteDriver=async(req,res)=>{
    try{
        await Driver.findByIdAndDelete(req.params.id)
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
