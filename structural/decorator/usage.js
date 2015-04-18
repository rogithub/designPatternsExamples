var p = require('./papas');
var r = require('./refresco');
var h = require('./hamburguesa');

var combosBase = require('./comboBase');
var combos1 = require('./combo1');
var combos2 = require('./combo2');

var comboBase = combosBase(h(1), p(50), r(250));
var comboBase1 = combosBase(h(1), p(50), r(250));
var comboBase2 = combosBase(h(1), p(50), r(250));

var combo1 = combos1(comboBase1);
var combo2 = combos2(comboBase2);


function print(comboObj, titulo) {
    var combo = comboObj.preparar();
    
    console.log('**** ' + titulo + ' ****');
    console.log('Hamburguesa con ' + combo.hamburguesa.carnes + ' carnes');
    console.log('Refresco de ' + combo.refresco.mililitros + ' mililitros');
    console.log('Papas de ' + combo.papas.gramos + ' gramos');
    console.log('');
}

print(comboBase, 'COMBO BASE');
print(combo1, 'COMBO UNO');
print(combo2, 'COMBO DOS');
