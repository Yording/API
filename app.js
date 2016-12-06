'use strict'

// configuracion de express
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = require('./routes');

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', router);

app.get('/', function (req, res) {
    res.send({ message: "Bienvenidos al API wedevjs" });
});

module.exports = app;