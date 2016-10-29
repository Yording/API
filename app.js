
var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routes');

var app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api',router);

app.get('/',function(req,res) {
    res.send({message:"Bienvenidos al API wedevjs"});
});

module.exports = app;