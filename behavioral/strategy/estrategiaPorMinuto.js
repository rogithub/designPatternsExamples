var PorMinuto = (function() {

    var PorMinuto = function() {
       
    };
        
    PorMinuto.prototype.cobrar = function(segundos) {
        return ((segundos/60) * (1.0));
    };
    

    return PorMinuto;
})();

module.exports = function() {
    return new PorMinuto();
}