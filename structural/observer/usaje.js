var semaforo = require('./semaforo');


var s = semaforo();

s.on('antesDeCambiar', function(actual) {
    console.log('Cuidado, el semafor está en ' + actual + ' y está a punto de cambiar');
});


s.on('despuesDeCambiar', function(actual) {
    console.log('********************');
});

s.on('antesDeCambiar', function(actual) {
    console.log('_____________________');
});

s.on('despuesDeCambiar', function(actual) {
    console.log('Cuidado, el semafor acaba de cambiar a ' + actual);
});


s.cambiarEstado();
s.cambiarEstado();
s.cambiarEstado();