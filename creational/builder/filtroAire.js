var FiltroAire = (function() {
    var FiltroAire = function(precio) {
        this.precio = precio;
    };

    return FiltroAire;
})();

module.exports = function(precio) {
    return new FiltroAire(precio);
}

