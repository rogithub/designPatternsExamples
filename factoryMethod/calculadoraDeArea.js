var c = require('./circulo');
var r = require('./rectangulo');
var t = require('./triangulo');

var CalculadoraDeArea = (function() {
    var CalculadoraDeArea = function() {
        
    };
    
    CalculadoraDeArea.prototype.calcularArea = function(figura, a, b) {
        
        switch (figura) {    
            case 'circulo':
                return c(a, b).calcularArea();
                
            case 'rectangulo':
                return r(a, b).calcularArea();
                
            case 'triangulo':
                return t(a, b).calcularArea();
        }
        
        return 0;
    }

    return CalculadoraDeArea;
})();

module.exports = function() {
    return new CalculadoraDeArea();
}
