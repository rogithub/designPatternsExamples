var Afinacion = (function() {
    var Afinacion = function() {
        this.bujias = [];
        this.filtrosAire = [];
        this.filtrosGasolina = [];
        this.listrosAceite = [];
    };
    
    Afinacion.prototype.obtenerPresupuesto = function () {
        var total = 0;
        
        this.bujias.forEach(function (bujia) {
            total += bujia.precio;
        });
        
        this.filtrosAire.forEach(function (filtro) {
            total += filtro.precio;
        });
        
        this.filtrosGasolina.forEach(function (filtro) {
            total += filtro.precio;
        });
        
        this.listrosAceite.forEach(function (litro) {
            total += litro.precio;
        });
        
        return total;
    }

    return Afinacion;
})();

module.exports = function() {
    return new Afinacion();
}