var Refresco = (function() {

    var Refresco = function(mililitros) {
        this.mililitros = mililitros;
    };

    return Refresco;
})();

module.exports = function(mililitros) {
    return new Refresco(mililitros);
}
