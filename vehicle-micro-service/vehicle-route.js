const express=require('express');
const router=express.Router();
const vehicleController=require('./vehicleController');

router.route('/')
.get(vehicleController.getAllVehicles)
.post(vehicleController.createVehicle);
//router.route('/axi').get(vehicleController.axi);
router.route('/:id')
.get(vehicleController.getVehicle)
.patch(vehicleController.updateVehicle)
.delete(vehicleController.deleteVehicle)
.put(vehicleController.updateVehicle);
module.exports=router;
