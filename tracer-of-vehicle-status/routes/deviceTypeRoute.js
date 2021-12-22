
const express = require('express');
const {type_create, type_delete, type_list} = require('../controllers/deviceTypeController');

const router = express.Router();


router.get('/list',type_list)
router.post('/create',type_create)
router.delete('/delete/:id',type_delete)


module.exports =router;