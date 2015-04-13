var tallerFactory = require('./TallerMecanico');
var afinacion4Factory = require('./afinacion4Cilindros');
var afinacion6Factory = require('./afinacion6Cilindros');
var afinacion8Factory = require('./afinacion8Cilindros');


var tallerDeAbraham = tallerFactory();

var paquete4 = tallerDeAbraham.construir(afinacion4Factory());
var paquete6 = tallerDeAbraham.construir(afinacion6Factory());
var paquete8 = tallerDeAbraham.construir(afinacion8Factory());


console.log('El paquete de 4 bujías cuesta: ' + paquete4.obtenerPresupuesto());
console.log('El paquete de 6 bujías cuesta: ' + paquete6.obtenerPresupuesto());
console.log('El paquete de 8 bujías cuesta: ' + paquete8.obtenerPresupuesto());