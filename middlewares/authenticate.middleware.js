'use strict'

var jwt = require('jsonwebtoken');
var config = require('../config');

module.exports = {

  verifyToken: function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
          return res.status(401).send({ message: 'Fallido el TOKEN de autentificación.' });
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;
          next();
        }
      });
    } else {
      // if there is no token
      // return an error
      return res.status(403).send({ message: 'No hay TOKEN proporcionado!.' });
    }
  }

};
