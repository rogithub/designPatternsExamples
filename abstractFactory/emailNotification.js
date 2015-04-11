var EmailNotification = (function() {
    var EmailNotification = function() {
    
    };

    EmailNotification.prototype.sendMessage = function(text) {
        console.log(text);
    };
    
    return EmailNotification;
})();

module.exports = function() {
    return new EmailNotification();
}

