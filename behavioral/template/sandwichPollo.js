var Sandwich = require('./sandwich');
var util = require('util');

var SandwichPollo = (function () {
    function SandwichPollo() {
        
    }
    
    util.inherits(SandwichPollo, Sandwich);
    
    SandwichPollo.prototype.ponerIngredientePrincipal = function() {
        console.log('se pone POLLO');
    }
    
    return SandwichPollo;
})();

module.exports = function() {
    return new SandwichPollo();
}