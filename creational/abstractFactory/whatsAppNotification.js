var WhatsAppNotification = (function() {
    
    var WhatsAppNotification = function() {
    
    };

    WhatsAppNotification.prototype.sendMessage = function(text) {
        console.log(text);
    };
    
    return WhatsAppNotification;
    
})();

module.exports = function() {
    return new WhatsAppNotification();
}
