var Papas = (function() {

    var Papas = function(gramos) {
        this.gramos = gramos;
    };

    return Papas;
})();

module.exports = function(gramos) {
    return new Papas(gramos);
}
