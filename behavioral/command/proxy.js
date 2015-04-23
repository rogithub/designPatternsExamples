var request = require('request');

var Proxy = (function () {
    function Proxy() {
        
    }

    Proxy.prototype.op = function() {
        request.post({
            url: 'http://localhost:8080/op', 
            form: { name: 'rodrigo' },
            headers: { 'Content-Type': 'application/json'}
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                return console.log(body);
            }
            if (error) {
                return console.dir(error);
            }
            
            console.log('you should not see this message');
        });
    };
        
    

    return Proxy;
})();

module.exports = function() {
    return new Proxy();
}