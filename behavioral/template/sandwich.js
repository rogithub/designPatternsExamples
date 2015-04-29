module.exports = (function () {
    function Sandwich() {
        
    }
    
    Sandwich.prototype.ponerPan = function() {
        console.log('se agrega pan');
    }
    
    Sandwich.prototype.ponerAderezo = function() {
        console.log('se agrega aderezo');
    }
    
    Sandwich.prototype.ponerIngredientePrincipal = function() {
        // se pone en las clases que hereden
    }
    
    Sandwich.prototype.preparar = function() {
        this.ponerPan();
        this.ponerAderezo();
        this.ponerIngredientePrincipal();
        this.ponerPan();
    }
    
    return Sandwich;
})();
