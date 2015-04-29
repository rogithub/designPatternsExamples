var suma = require('./suma');
var resta = require('./resta');
var multiplicacion = require('./multiplicacion');
var division = require('./division');
var visitor = require('./visitor');
var visitorB = require('./visitorB');

var impresora = visitor();

var dosMasTres = suma(2, 3);
dosMasTres.visit(visitorB('+'));
dosMasTres.visit(impresora);

var cincoMenosDos = resta(5, 2);
cincoMenosDos.visit(visitorB('-'));
cincoMenosDos.visit(impresora);

var dosPorDos = multiplicacion(2, 2);
dosPorDos.visit(visitorB('*'));
dosPorDos.visit(impresora);

var ocheEntreDos = division(8, 2);
ocheEntreDos.visit(visitorB('/'));
ocheEntreDos.visit(impresora);
