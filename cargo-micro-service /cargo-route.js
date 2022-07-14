const express=require('express');
const router=express.Router();
const cargoController=require('./cargoController');

router.route('/')
.get(cargoController.getAllCargos)
.post(cargoController.createCargo);
//router.route('/axi').get(vehicleController.axi);
router.route('/:id')
.get(cargoController.getCargo)
.patch(cargoController.updateCargo)
.delete(cargoController.deleteCargo)
.put(cargoController.updateCargo);
module.exports=router;
