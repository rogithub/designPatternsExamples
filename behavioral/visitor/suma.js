var Suma = (function() {

    var Suma = function(a, b) {
        this.a = a;
        this.b = b;
    };
    
    Suma.prototype.resultado = function() {
        return this.a + this.b;
    }
    
    Suma.prototype.visit = function(visitor){
        visitor.visit(this);
    }

    return Suma;
})();

module.exports = function(a, b) {
    return new Suma(a, b);
}
