'use strict'

var mongoose = require('mongoose');
var config = require('./config/config');
var app = require("./app");
if (config.seedDB) { require('./config/seed'); }
// Conexion a la base de datos de MongoDb
mongoose.connect(config.db, function (err, res) {
	if (err)
		throw err;

	console.log("Conexión a la base de datos establecida...");

	app
		.listen(config.port, function () {
			console.log("Api REST http://localhost:" + config.port);
		});
});

