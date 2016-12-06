'use strict'

var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user.controller')

router
    .get('/', userCtrl.getUsers) //ver los usuarios registrados
    .delete('/:userId', userCtrl.deleteUser) //eliminar un usuario
    .get('/setup', userCtrl.seedCreateAdministrador) //insertar un usuario Administrador
    .post('/authenticate', userCtrl.authenticate) //authentificar un usuario y recibir token

module.exports = router;