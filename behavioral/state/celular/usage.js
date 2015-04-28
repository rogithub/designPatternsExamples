var sonarState = require('./sonarState');
var vibrarState = require('./vibrarState');
var celularFactory = require('./celular');


var cel = celularFactory(sonarState, vibrarState);

cel.recibirLlamada();
cel.changeState('vibrar');
cel.recibirLlamada();