'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api',router);

module.exports = app;