var Asteriscos = (function() {

    var Asteriscos = function() {
        
    };
        
    Asteriscos.prototype.print = function() {
        console.log('***');
    }
    

    return Asteriscos;
})();

module.exports = function() {
    return new Asteriscos();
}