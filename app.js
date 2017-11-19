/* Configuración de express */

'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var apiLogin = require('./routes/login');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/apiLogin', apiLogin);

module.exports = app;