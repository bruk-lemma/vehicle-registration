const mongoose=require('mongoose');
const CustomerSchema=new mongoose.Schema({
    customer_name:{
        type:String,
        required:[true,"A Customer must have a name"],
        //unique:true,
        trim:true
    },
    customer_phone_number:{
        type:String,
        required:[true,"A Customer must have a  number"],
        //unique:true,
        trim:true
    },
    customer_address:{
        type:String,
        required:[true,"a Customer must have an address"],
        //unique:true,
        trim:true
    },
    customer_company_name:{
        type:String,
        required:[true,"A Customer must have an company name"],
        trim:true
    }
});
const Customer=mongoose.model('Customer',CustomerSchema);
module.exports=Customer;