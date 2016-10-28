'use strict'

const mongoose = require('mongoose');
const config = require('./config');
const app = require("./app");


mongoose.connect(config.db, (err,res) =>{
	if(err) throw err;
	console.log("Conexión a la base de datos establecida...");

	app.listen(config.port,() => {
		console.log(`Api REST http://localhost:${config.port}`);
	});
});

