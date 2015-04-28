var Vestimenta = (function() {

    var Vestimenta = function(camisa, pantalon) {
        this.camisa = camisa;
        this.pantalon = pantalon;
    };

    return Vestimenta;
})();

module.exports = function(camisa, pantalon) {
    return new Vestimenta(camisa, pantalon);
}