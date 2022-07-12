const mongoose=require('mongoose');
const vehicleSchema=new mongoose.Schema({
    vehicle_name:{
        type:String,
        required:[true,"A vehicle must have a name"],
        //unique:true,
        trim:true
    },
    vehicle_chassi_number:{
        type:String,
        required:[true,"A vehicle must have a chassi number"],
        //unique:true,
        trim:true
    },
    vehicle_plate_number:{
        type:String,
        required:[true,"a vehicle must have a plate number"],
        //unique:true,
        trim:true
    },
    vehicle_Engine_Type:{
        type:String,
        required:[true,"A vehicle must have an engine type"],
        trim:true
    }
});
const Vehicle=mongoose.model('Vehicle',vehicleSchema);
module.exports=Vehicle;