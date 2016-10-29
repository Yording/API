var express = require('express');
var router = express.Router();
var productCtrl = require('../controllers/product');


//get para todos los productos
router.get('/product', productCtrl.getProducts);
//Obtener un producto de la base de datos
router.get('/product/:productId', productCtrl.getProduct);
//Insertar un nuevo producto en B.D
router.post('/product', productCtrl.createProduct);
//Actualizzar un producto de la base de datos
router.put('/product/:productId',productCtrl.updateProduct);
//Eliminar un producto de la base de datos
router.delete('/product/:productId', productCtrl.deleteProduct);

module.exports = router;