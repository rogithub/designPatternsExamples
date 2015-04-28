var Vibrar = (function() {

    var Vibrar = function() {
        
    };
        
    Vibrar.prototype.notificar = function() {
        console.log('brrr... brrr... brrr...');
    }
    

    return Vibrar;
})();

module.exports = function() {
    return new Vibrar();
}