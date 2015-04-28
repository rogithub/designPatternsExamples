var laptopFactory = require('./laptop');
var encendidaFactory = require('./encendidaState');
var apagadaFactory = require('./apagadaState');

var laptop = laptopFactory(encendidaFactory, apagadaFactory);

laptop.encender();