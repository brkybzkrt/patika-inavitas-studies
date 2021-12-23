
const express = require('express');
const { gps_list, gps_create } = require('../controllers/logLocationController');


const router = express.Router();


router.get('/list',gps_list);
router.post('/create',gps_create);


module.exports =router;