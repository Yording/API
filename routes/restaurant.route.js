'use strict'

var express = require('express');
var router = express.Router();
var restaurantCtrl = require('../controllers/restaurant.controller');

router
    .get('/', restaurantCtrl.getRestaurants)
    .post('/', restaurantCtrl.createRestaurant)
    .delete('/:restaurantId', restaurantCtrl.deleteRestaurant)
    .get('/:restaurantId', restaurantCtrl.getRestaurant)
    .put('/:restaurantId', restaurantCtrl.updateRestaurant)

module.exports = router;