'use strict';

var path = require('path');
var authMiddleware = require('./middlewares/authenticate.middleware');
var express = require('express');
var router = express.Router();
var userRoute = require('./routes/user.route.js');
var productRoute = require('./routes/product.route.js');

router
  .use(authMiddleware.verifyToken)  //route middleware para verificar un token
  .use('/products', productRoute) //routes products
  .use('/users', userRoute) // routes users

module.exports = router;
