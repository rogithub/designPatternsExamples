var CelularMedioAdapter = (function() {

    var CelularMedioAdapter = function(celular) {
        this.celular = celular;
    };

    CelularMedioAdapter.prototype.enviar = function(mensaje) {
        this.celular.enviarSMS(mensaje);
    };

    return CelularMedioAdapter;
})();

module.exports = function(celular) {
    return new CelularMedioAdapter(celular);
}
