var celularFactory = require('./celular');
var adapterFactory = require('./celularMedioAdapter');
var notificadorFactory = require('./notificador');


var celular = celularFactory();
var adapter = adapterFactory(celular);
var notificador = notificadorFactory();

notificador.notificar(adapter, 'Hola Mundo!');