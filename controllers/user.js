var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config');

function authenticate (req,res){
	 // find the user
  User.findOne({
    name: req.body.name
  }, function(err, user) {

    if (err) return res.status(500).send({message: "Error a realizar la petición: " + err});

    if (!user) {
      return res.status(401).send({message: 'Autentificación fallida! El usuario no se encuentra.'});
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
       return res.status(401).send({message: 'Autentificación fallida! La contraseña es Incorrecta.' });
     } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, config.secret, {
          expiresIn: '24h' // expires in 24 hours
        });

        // return the information including token as JSON app
        return res.status(200).send({token: token});
      }   

    }

  });
}

function createUser (req,res){
	// create a usuario Administrador
  var userAdministrador = new User({ 
  	name: 'Admin', 
  	password: 'AdminWedevJS2016!*',
  	admin: true 
  });

  // save the sample user
  userAdministrador.save(function(err) {
  	if (err) return res.status(500).send({message: "Error a realizar la petición: " + err});

  	console.log('');
  	res.status(200).send({ message: "Usuario registrado" });
  });
}

module.exports = {
	authenticate,
	createUser
};