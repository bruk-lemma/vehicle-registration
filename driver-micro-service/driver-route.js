const express=require('express');
const router=express.Router();
const driverController=require('./driverController');

router.route('/')
.get(driverController.getAllDrivers)
.post(driverController.createDriver);

router.route('/:id')
.get(driverController.getDriver)
.put(driverController.updateDriver)
.patch(driverController.updateDriver)
.delete(driverController.deleteDriver);

module.exports=router;
