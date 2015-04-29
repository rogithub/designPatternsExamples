var Sandwich = require('./sandwich');
var util = require('util');

var SandwichJamon = (function () {
    function SandwichJamon() {
        
    }
    
    util.inherits(SandwichJamon, Sandwich);
    
    SandwichJamon.prototype.ponerIngredientePrincipal = function() {
        console.log('se pone JAMON');
    }
    
    return SandwichJamon;
})();

module.exports = function() {
    return new SandwichJamon();
}