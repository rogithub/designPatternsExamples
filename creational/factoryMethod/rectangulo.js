var Rectangulo = (function() {
    var Rectangulo = function(base, altura) {
        this.base = base;
        this.altura = altura;
    };
    
    Rectangulo.prototype.calcularArea = function() {
        return this.base * this.altura;
    }

    return Rectangulo;
})();

module.exports = function(base, altura) {
    return new Rectangulo(base, altura);
}
