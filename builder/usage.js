var tallerFactory = require('./TallerMecanico');
var afinacion4Factory = require('./afinacion4Cilindros');
var afinacion6Factory = require('./afinacion6Cilindros');
var afinacion8Factory = require('./afinacion8Cilindros');


var tallerDeAbraham = tallerFactory();
var estrategia4Cilindros = afinacion4Factory({
    bujia: 10,
    filtroAire: 12,
    filtroGasolina: 15,
    litroAceite: 18
});

var estrategia6Cilindros = afinacion6Factory({
    bujia: 12,
    filtroAire: 30,
    filtroGasolina: 45,
    litroAceite: 18
});

var estrategia8Cilindros = afinacion8Factory({
    bujia: 15,
    filtroAire: 60,
    filtroGasolina: 75,
    litroAceite: 18
});


var paquete4 = tallerDeAbraham.construir(estrategia4Cilindros);
var paquete6 = tallerDeAbraham.construir(estrategia6Cilindros);
var paquete8 = tallerDeAbraham.construir(estrategia8Cilindros);


console.log('El paquete de 4 bujías cuesta: ' + paquete4.obtenerPresupuesto());
console.log('El paquete de 6 bujías cuesta: ' + paquete6.obtenerPresupuesto());
console.log('El paquete de 8 bujías cuesta: ' + paquete8.obtenerPresupuesto());