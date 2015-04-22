var soldierFactory = require('./soldier');
var fSoldierFactory = require('./flyweightSoldier');


function create(factory, amount) {
    for(var i = 0; i < amount; i++) {
        var item = factory();
        var x = item.Hunger;
    }
}

function measure(createFunction, factory, amount, text) {
    var start = new Date();
    var hrstart = process.hrtime();

    setTimeout(function () {
        createFunction(factory, amount);
        var end = new Date() - start,
            hrend = process.hrtime(hrstart);

        console.log(text + ' ' + amount);
        console.info("Execution time: %dms", end);
        console.info("Execution time (hr): %ds %dms", hrend[0], hrend[1]/1000000);
        console.log('\n\r');
    }, 1);
}

var amount = 10000000;


if (process.argv[2] == 's')
    measure(create, soldierFactory, amount, 'soldier');
else
    measure(create, fSoldierFactory, amount, 'flyweight');

//llamar con uno de los siguientes:
//$ node usage.js s
//$ node usage.js
