'use strict'

var Restaurant = require("../models/restaurant.model");

module.exports = {

	getRestaurant: function (req, res) {
		var restaurantId = req.params.restaurantId;

		Restaurant.findById(restaurantId, function (err, restaurant) {
			if (err)
				return res.status(500).send({ message: "Error al realizar la petición: " + err });

			if (!restaurant)
				return res.status(404).send({ message: "El restaurante no existe" });

			return res.status(200).send({ restaurant: restaurant });
		});
	},

	getRestaurants: function (req, res) {
		Restaurant.find({}, function (err, restaurants) {
			if (err)
				return res.status(500).send({ message: "Error al realizar la petición: " + err });

			if (!restaurants)
				return res.status(404).send({ message: "No existen restaurantes" });

			return res.status(200).send({ restaurants: restaurants });
		});
	},

	updateRestaurant: function (req, res) {
		var restaurantId = req.params.restaurantId;
		var update = req.body;

		Restaurant.findByIdAndUpdate(restaurantId, update, function (err, restaurant) {
			if (err)
				return res.status(500).send({ message: "Error al actualizar el restaurante: " + err });

			return res.status(200).send({ restaurant: restaurant });
		});
	},

	deleteRestaurant: function (req, res) {
		var restaurantId = req.params.restaurantId;

		Restaurant.findById(restaurantId, function (err, restaurant) {
			if (err)
				return res.status(500).send({ message: "Error al borrar el restaurante: " + err });

			restaurant.remove(function (err) {
				if (err)
					return res.status(500).send({ message: "Error al borrar el restaurante: " + err });

				return res.status(200).send({ message: "El restaurante ha sido eliminado" });
			});
		});
	},

	createRestaurant: function (req, res) {
		var restaurant = new Restaurant();
		restaurant.name = req.body.name;
		restaurant.price = req.body.price;
		restaurant.picture = req.body.picture;
		restaurant.category = req.body.category;
		restaurant.description = req.body.description;


		restaurant.save(function (err, restaurant) {
			if (err)
				return res.status(500).send({ message: "Error al guardad en la B.D: " + err });

			return res.status(200).send({ restaurant: restaurant });
		});
	}
};