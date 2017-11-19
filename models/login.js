'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = Schema({
    nombre: String,
    login: String,
    password: String,
    correo: String,
    id: Number
});

module.exports = mongoose.model('Usuario',usuarioSchema);