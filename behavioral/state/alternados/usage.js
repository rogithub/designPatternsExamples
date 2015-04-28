var managerFactory = require('./manager');
var rayitasFactory = require('./rayitas');
var asteriscosFactory = require('./asteriscos');
var iteratorFactory = require('./iterator');

var manager = managerFactory(rayitasFactory, asteriscosFactory);

var states = ['asteriscos', 'rayitas'];
var iterator = iteratorFactory(states);

setInterval(function() {
    manager.changeState(iterator.next());
}, 1000);
