var tallerFactory = require('./TallerMecanico');
var afinacion4Factory = require('./afinacion4Cilindros');
var afinacion6Factory = require('./afinacion6Cilindros');
var afinacion8Factory = require('./afinacion8Cilindros');


var tallerDeAbraham = tallerFactory();
var afinacion4cil = afinacion4Factory({
    bujia: 10,
    filtroAire: 12,
    filtroGasolina: 15,
    litroAceite: 18
});

var afinacion6cil = afinacion6Factory({
    bujia: 12,
    filtroAire: 30,
    filtroGasolina: 45,
    litroAceite: 18
});

var afinacion8cil = afinacion8Factory({
    bujia: 15,
    filtroAire: 60,
    filtroGasolina: 75,
    litroAceite: 18
});


var paquete4 = tallerDeAbraham.construir(afinacion4cil);
var paquete6 = tallerDeAbraham.construir(afinacion6cil);
var paquete8 = tallerDeAbraham.construir(afinacion8cil);


console.log('Afinación para autos de 4 cilindors cuesta: ' + paquete4.obtenerPresupuesto());
console.log('Afinación para autos de 6 cilindors cuesta: ' + paquete6.obtenerPresupuesto());
console.log('Afinación para autos de 8 cilindors cuesta: ' + paquete8.obtenerPresupuesto());