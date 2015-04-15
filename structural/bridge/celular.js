var Celular = (function() {

    var Celular = function() {

    };

    Celular.prototype.enviarSMS = function(mensaje) {
        console.log(mensaje);
    };

    return Celular;
})();

module.exports = function() {
    return new Celular();
}
