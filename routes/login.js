'use strict'

var express = require('express');
var loginController = require("../controllers/login");

var api = express.Router();

api.get ("/existeUsuario/:login/:password", loginController.existeUsuario);
api.get ("/getNivelUsuario/:id", loginController.getNivelUsuario);
api.post ("/addUsuario", loginController.addUsuario);
api.get ("/getMensajeUsuario/:id", loginController.getMensajeUsuario);

module.exports = api;