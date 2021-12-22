
const express = require('express');
const { device_list, device_create, device_update, device_delete } = require('../controllers/deviceController');

const router = express.Router();


router.get('/list',device_list)
router.post('/create',device_create)
router.patch('/update/:id',device_update)
router.delete('/delete/:id',device_delete)


module.exports =router;