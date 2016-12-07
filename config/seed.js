'use strict'

var Restaurant = require('../models/restaurant.model');
var restaurantData = require('./data/restaurant.json');

Restaurant.find({}).remove(function (err) {
    restaurantData.forEach(function (ele) {
        Restaurant.create({
            nit: ele.rnt,
            nombre_comercial: ele.nombre_comercial,
            direccion: ele.direccion,
            telefono: ele.telefono,
            localidad: ele.localidad,
            servicio_a_domicilio: ele.servicio_a_domicilio,
            telefono_a_domicilio: ele.telefono_a_domicilio,
            pagina_web: ele.pagina_web
        });
    });
    console.log("Restaurants Loaded");
})