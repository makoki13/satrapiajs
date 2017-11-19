'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 10276;
/*
var promise = mongoose.connect('mongodb://localhost/myapp', {
  useMongoClient: true,
  
});

app.listen(port, function() {
	console.log(`Servidor Satrapia funcionando en http://localhost:${port}... OK!`);
});
*/

mongoose.connect('mongodb://localhost:27017/satrapia', (err, res) => {
	if (err) {
		//throw err;
		console.log(err);
	}
	else {
		app.listen(port, function() {
			console.log(`El servidor [Satrapia] funcionando en http://localhost:${port}... OK!`);
		});
	}
});