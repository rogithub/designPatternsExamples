var persona = require('./persona');
var database = require('./dataBase');
var vestimenta = require('./vestimenta');

var lunes = 0,
    martes = 1,
    miercoles = 2,
    jueves = 3,
    viernes = 4;

var db = database();
var yo = persona(db);

yo.vestirme(lunes, vestimenta('camisa de rayas', 'pantalon negro'));
yo.vestirme(martes, vestimenta('camisa roja', 'pantalon beige'));
yo.vestirme(miercoles, vestimenta('playera', 'short'));
yo.vestirme(jueves, vestimenta('camisa azul', 'pantalon azul'));
yo.vestirme(viernes, vestimenta('saco','pantalon de vestir'));

var vestimentaMartes = yo.verQueTraiaPuesto(martes);
console.log('el martes traia: ' + vestimentaMartes.camisa + ' y ' + vestimentaMartes.pantalon);