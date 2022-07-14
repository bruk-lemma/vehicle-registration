const express=require('express');
const router=express.Router();
const customerController=require('./CustomerController');

router.route('/')
.get(customerController.getAllCustomers)
.post(customerController.createCustomer);
//router.route('/axi').get(vehicleController.axi);
router.route('/:id')
.get(customerController.getCustomer)
.patch(customerController.updateCustomer)
.delete(customerController.deleteCustomer)
.put(customerController.updateCustomer);
module.exports=router;
