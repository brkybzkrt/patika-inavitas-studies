
const express = require('express');
const { vehicle_list, vehicle_create, vehicle_update, vehicle_delete } = require('../controllers/vehicleController');

const router = express.Router();


router.get('/list',vehicle_list)
router.post('/create',vehicle_create)
router.patch('/update/:id',vehicle_update)
router.delete('/delete/:id',vehicle_delete)


module.exports =router;