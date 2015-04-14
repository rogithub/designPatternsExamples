var Triangulo = (function() {
    var Triangulo = function(base, altura) {
        this.base = base;
        this.altura = altura;
    };
    
    Triangulo.prototype.calcularArea = function() {
        return (this.base * this.altura) / 2;
    }

    return Triangulo;
})();

module.exports = function(base, altura) {
    return new Triangulo(base, altura);
}
