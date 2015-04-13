var TallerMecanico = (function() {
    var TallerMecanico = function() {
       
    };
    
    TallerMecanico.prototype.construir = function (paqueteDeAfinacion) {
       return paqueteDeAfinacion.construir();
    }

    return TallerMecanico;
})();

module.exports = function() {
    return new TallerMecanico();
}