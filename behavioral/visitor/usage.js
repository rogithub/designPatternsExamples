var suma = require('./suma');
var resta = require('./resta');
var multiplicacion = require('./multiplicacion');
var division = require('./division');
var visitor = require('./visitor');

var impresora = visitor();

console.log('dos mas tres');
var dosMasTres = suma(2, 3);
dosMasTres.visit(impresora);

console.log('cinco menos dos');
var cincoMenosDos = resta(5, 2);
cincoMenosDos.visit(impresora);

console.log('dos por dos');
var dosPorDos = multiplicacion(2, 2);
dosPorDos.visit(impresora);

console.log('ocho entre dos');
var ocheEntreDos = division(8, 2);
ocheEntreDos.visit(impresora);
