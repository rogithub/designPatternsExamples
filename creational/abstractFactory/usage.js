var emailFactory = require('./emailNotification');
var smsFactory = require('./smsNotification');
var whatsAppFactory = require('./whatsAppNotification');

var email = emailFactory();
var sms = smsFactory();
var whats = whatsAppFactory();


email.sendMessage('message by email');
sms.sendMessage('messabe by sms');
whats.sendMessage("message by what's app");