var Sonar = (function() {

    var Sonar = function() {
        
    };
        
    Sonar.prototype.notificar = function() {
        console.log('ring... ring... ring...');
    }
    

    return Sonar;
})();

module.exports = function() {
    return new Sonar();
}