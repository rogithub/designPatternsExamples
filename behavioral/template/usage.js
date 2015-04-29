var sjFactory = require('./sandwichJamon');
var spFactory = require('./sandwichPollo');

var sandwichJamon = sjFactory();
sandwichJamon.preparar();

console.log('----------------');

var sandwichPollo = spFactory();
sandwichPollo.preparar();
