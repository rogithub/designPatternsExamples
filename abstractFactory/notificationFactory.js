var EmailNotification = require('./emailNotification').EmailNotification;
var SmsNotification = require('./smsNotification').SmsNotification;
var WhatsAppNotification = require('./whatsAppNotification').WhatsAppNotification;

var NotificationFactory = (function() {
    var NotificationFactory = function() {
    
    };

    NotificationFactory.prototype.notifyByEmail = function() {
        return new EmailNotification();
    };

    NotificationFactory.prototype.notifyByWhatsApp = function() {
        return new WhatsAppNotification();
    };

    NotificationFactory.prototype.notifyBySms = function() {
        return new SmsNotification();
    };
    
    
    return NotificationFactory;
})();
    
exports.NotificationFactory = NotificationFactory;