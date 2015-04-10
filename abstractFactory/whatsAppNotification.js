var WhatsAppNotification = (function() {
    
    var WhatsAppNotification = function() {
    
    };

    WhatsAppNotification.prototype.sendMessage = function(text) {
        console.log(text);
    };
    
    return WhatsAppNotification;
    
})();

exports.WhatsAppNotification = WhatsAppNotification;
