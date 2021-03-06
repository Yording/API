'use strict';

var path = require('path');
var authMiddleware = require('./middlewares/authenticate.middleware');
var express = require('express');
var router = express.Router();
var userRoute = require('./routes/user.route.js');
var productRoute = require('./routes/product.route.js');
var restaurantRoute = require('./routes/restaurant.route.js');

router
  .use('/products', authMiddleware.verifyToken, productRoute) //routes products. Se asigna Middleware de verificacion token para la ruta
  .use('/restaurants', authMiddleware.verifyToken, restaurantRoute)
  .use('/users', userRoute) // routes users

module.exports = router;
