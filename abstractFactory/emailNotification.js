var EmailNotification = (function() {
    var EmailNotification = function() {
    
    };

    EmailNotification.prototype.sendMessage = function(text) {
        console.log(text);
    };
    
    return EmailNotification;
})();

exports.EmailNotification = EmailNotification;
