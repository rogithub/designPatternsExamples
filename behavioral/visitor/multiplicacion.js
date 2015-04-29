var Multiplicacion = (function() {

    var Multiplicacion = function(a, b) {
        this.a = a;
        this.b = b;
    };
    
    Multiplicacion.prototype.resultado = function() {
        return this.a * this.b;
    }
    
    Multiplicacion.prototype.visit = function(visitor){
        visitor.visit(this);
    }

    return Multiplicacion;
})();

module.exports = function(a, b) {
    return new Multiplicacion(a, b);
}
