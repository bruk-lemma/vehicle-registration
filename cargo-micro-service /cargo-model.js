const mongoose=require('mongoose');
const cargoSchema=new mongoose.Schema({
    cargo_name:{
        type:String,
        required:[true,"A cargo must have a name"],
        //unique:true,
        trim:true
    },
    cargo_product_number:{
        type:String,
        required:[true,"A cargo must have a product number"],
        //unique:true,
        trim:true
    },
    cargo_weight:{
        type:Number,
        required:[true,"a cargo must have a weight"],
        //unique:true,
        trim:true
    },
    cargo_product_Type:{
        type:String,
        required:[true,"A cargo must have an product type"],
        trim:true
    }
});
const Cargo=mongoose.model('Cargo',cargoSchema);
module.exports=Cargo;