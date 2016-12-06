'use strict'

var express = require('express');
var router = express.Router();
var productCtrl = require('../controllers/product.controller')

router
    .get('/', productCtrl.getProducts) //get para todos los productos
    .get('/:productId', productCtrl.getProduct) //Obtener un producto de la base de datos
    .post('/', productCtrl.createProduct) //Insertar un nuevo producto en B.D
    .put('/:productId', productCtrl.updateProduct) //Actualizzar un producto de la base de datos
    .delete('/:productId', productCtrl.deleteProduct) //Eliminar un producto de la base de datos

module.exports = router;