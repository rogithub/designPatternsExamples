var NotificationFactory = require('./notificationFactory').NotificationFactory;

var factory = new NotificationFactory();

var email = factory.notifyByEmail();
var sms = factory.notifyBySms();
var whats = factory.notifyByWhatsApp();


email.sendMessage('message by email');
sms.sendMessage('messabe by sms');
whats.sendMessage("message by what's app");