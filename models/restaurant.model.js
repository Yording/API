'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = Schema({
	nit: String,
	nombre_comercial: String,
	direccion: String,
	telefono: String,
	localidad: String,
    servicio_a_domicilio: String,
    telefono_a_domicilio: String,
    pagina_web: String
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;