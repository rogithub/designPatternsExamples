var PorSegundo = (function() {

    var PorSegundo = function() {
       
    };
        
    PorSegundo.prototype.cobrar = function(segundos) {
        return (segundos * 0.01);
    };
    

    return PorSegundo;
})();

module.exports = function() {
    return new PorSegundo();
}