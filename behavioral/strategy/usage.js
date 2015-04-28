var estrategiaPorMinuto = require('./estrategiaPorMinuto');
var estrategiaPorSegundo = require('./estrategiaPorSegundo');
var empresa = require('./telcel');
var clientes = require('./cliente');

var telcel = empresa(estrategiaPorMinuto, estrategiaPorSegundo);

var clienteUno = clientes(150, 300);
var clienteDos = clientes(80, 300);

telcel.facturar(clienteUno);
telcel.facturar(clienteDos);