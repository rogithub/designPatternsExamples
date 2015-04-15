var celularFactory = require('./celular');
var whatsAppFactory = require('./whatsApp');
var celularAdapterFactory = require('./celularMedioAdapter');
var whatsAppAdapterFactory = require('./whatsAppMedioAdapter');
var notificadorFactory = require('./notificador');


var celular = celularFactory();
var whatsApp = whatsAppFactory();
var celularAdapter = celularAdapterFactory(celular);
var whatsAppAdapter = whatsAppAdapterFactory(whatsApp);
var notificador = notificadorFactory();

notificador.notificar(celularAdapter, 'Hola Mundo desde Celular!');
notificador.notificar(whatsAppAdapter, 'Hola Mundo desde WhatsApp!');