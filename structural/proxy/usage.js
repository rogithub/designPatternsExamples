var serverProxy = require('./serverProxy');

var host = host = 'http://localhost:8080';

proxy = serverProxy(host);

proxy.obtenerFecha();
proxy.obtenerHora();
