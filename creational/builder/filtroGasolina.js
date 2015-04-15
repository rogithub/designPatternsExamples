var FiltroGasolina = (function() {
    var FiltroGasolina = function(precio) {
        this.precio = precio;
    };

    return FiltroGasolina;
})();

module.exports = function(precio) {
    return new FiltroGasolina(precio);
}
