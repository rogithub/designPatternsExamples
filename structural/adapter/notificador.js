var Notificador = (function() {

    var Notificador = function() {

    };

    Notificador.prototype.notificar = function(medio, mensaje) {
        medio.enviar(mensaje);
    };

    return Notificador;
})();

module.exports = function() {
    return new Notificador();
}
