var SmsNotification = (function() {

    var SmsNotification = function() {

    };

    SmsNotification.prototype.sendMessage = function(text) {
        console.log(text);
    };

    return SmsNotification;
})();

exports.SmsNotification = SmsNotification;
