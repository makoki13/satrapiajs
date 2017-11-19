'use strict'

var Usuario = require("../models/login");

function existeUsuario(req, res) {
    var login = req.params.login;
	var password = req.params.password;	
	res.status(200).send({
		'id': 1,
		'data':true,
		'login': login,
		'password': password
	});
}

function getNivelUsuario(req, res) {
	var idUsuario = req.params.id;
	res.status(200).send({
		'idUsuario': idUsuario,
		'data':1		
	});
}

function addUsuario(req, res) {
	var usuario = new Usuario;

	var params = req.body;

	usuario.nombre = params.nombre;
	usuario.login = params.login;
	usuario.password = params.password;
	usuario.correo = params.correo;

	usuario.save( (err, usuarioStored) => {
		if (err) {
			res.status(500).send({message: 'Error al crear el usuario'});
		}

		console.log(usuarioStored);
		//res.status(200).send({usuario: usuarioStored });		
	});

	res.status(200).send({data: params});
}

function getMensajeUsuario(req, res) {
	var idUsuario = req.params.id;
	res.status(200).send({
		'idUsuario': idUsuario,
		'data':'mensaje de usuario'		
	});
}

module.exports = {
	existeUsuario,
	getNivelUsuario,
	addUsuario,
	getMensajeUsuario
}
