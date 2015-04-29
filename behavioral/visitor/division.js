var Division = (function() {

    var Division = function(a, b) {
        this.a = a;
        this.b = b;
    };
    
    Division.prototype.resultado = function() {
        return this.a / this.b;
    }
    
    Division.prototype.visit = function(visitor){
        visitor.visit(this);
    }

    return Division;
})();

module.exports = function(a, b) {
    return new Division(a, b);
}
