var WhatsAppMedioAdapter = (function() {

    var WhatsAppMedioAdapter = function(whatsApp) {
        this.whatsApp = whatsApp;
    };

    WhatsAppMedioAdapter.prototype.enviar = function(mensaje) {
        this.whatsApp.enviarTexto(mensaje);
    };

    return WhatsAppMedioAdapter;
})();

module.exports = function(whatsApp) {
    return new WhatsAppMedioAdapter(whatsApp);
}
