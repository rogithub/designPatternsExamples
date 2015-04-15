var WhatsApp = (function() {

    var WhatsApp = function() {

    };

    WhatsApp.prototype.enviarTexto = function(mensaje) {
        console.log(mensaje);
    };

    return WhatsApp;
})();

module.exports = function() {
    return new WhatsApp();
}
