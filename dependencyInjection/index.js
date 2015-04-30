var diContainerFactory = require('jimenez-di-container');
var di = diContainerFactory();

//registramos que en cualquier constructor
//donde reciba la var dependency se sustituya
//por console.
di.register('dependency', console);

//registrar printer factory
di.factory('printer', require('./printer'));

//obtener una instancia de printer
var myObject = di.get('printer');

myObject.print('hola mundo');