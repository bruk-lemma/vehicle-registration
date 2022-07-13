const mongoose=require('mongoose');
const driverSchema=new mongoose.Schema({
    driver_name:{
        type:String,
        required:[true,"A driver must have a name"],
        //unique:true,
        trim:true
    },
    age:{
       type:Number,
       required:[true,"a driver must have age"],
       trim:true
    },
    gender:{
        type:String,
        required:[true,"A driver must have a Gender"],
        trim:true
    },
    driver_phone_number:{
        type:String,
        required:[true,"A driver must have a phone number"],
        //unique:true,
        trim:true
    },
    driver_address:{
        type:String,
        required:[true,"a driver must have address"],
        //unique:true,
        trim:true
    },
    driver_Licence_Type:{
        type:String,
        required:[true,"A driver must have licence type"],
        trim:true
    }

});
const Driver=mongoose.model('Driver',driverSchema);
module.exports=Driver;