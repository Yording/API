'use strict'

const mongoose = require('mongoose');
const config = require('./config');
const app = require("./app");


mongoose.connect(config.db);

app.listen(config.port);