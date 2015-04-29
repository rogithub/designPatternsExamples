var Resta = (function() {

    var Resta = function(a, b) {
        this.a = a;
        this.b = b;
    };
    
    Resta.prototype.resultado = function() {
        return this.a - this.b;
    }
    
    Resta.prototype.visit = function(visitor){
        visitor.visit(this);
    }

    return Resta;
})();

module.exports = function(a, b) {
    return new Resta(a, b);
}
