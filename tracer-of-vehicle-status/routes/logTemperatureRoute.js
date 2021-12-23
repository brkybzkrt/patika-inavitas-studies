
const express = require('express');
const { temp_create, temp_list } = require('../controllers/logTemperatureController');


const router = express.Router();


router.get('/list',temp_list)
router.post('/create',temp_create)


module.exports =router;