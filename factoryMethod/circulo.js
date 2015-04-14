var Circulo = (function() {
    var Circulo = function(pi, radio) {
        this.pi = pi;
        this.radio = radio;
    };
    
    Circulo.prototype.calcularArea = function() {
        return this.pi * (this.radio * this.radio);
    }

    return Circulo;
})();

module.exports = function(pi, radio) {
    return new Circulo(pi, radio);
}
