var Hamburguesa = (function() {

    var Hamburguesa = function(carnes) {
        this.carnes = carnes;
    };

    return Hamburguesa;
})();

module.exports = function(carnes) {
    return new Hamburguesa(carnes);
}
