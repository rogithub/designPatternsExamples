var Bujia = (function() {
    var Bujia = function(precio) {
        this.precio = precio;
    };

    return Bujia;
})();

module.exports = function(precio) {
    return new Bujia(precio);
}

