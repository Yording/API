'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = Schema({
	name: String,
	picture: String,
	price: {
		type: Number,
		default: 0,
	},
	category: {
		type: String,
		enum: ['computers', 'phones', 'accesories'],
	},
	description: String
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;