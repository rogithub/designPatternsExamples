var LitroAceite = (function() {
    var LitroAceite = function(precio) {
        this.precio = precio;
    };

    return LitroAceite;
})();

module.exports = function(precio) {
    return new LitroAceite(precio);
}

