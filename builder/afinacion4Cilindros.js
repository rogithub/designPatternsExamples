var afinacionFactory = require('./afinacion');
var bujiaFactory = require('./bujia');
var filtroAireFactory = require('./filtroAire');
var filtroGasolinaFactory = require('./filtroGasolina');
var litroAceiteFactory = require('./litroAceite');

var Afinacion4Cilindros = (function() {
    var Afinacion4Cilindros = function(precios) {
        this.precios = precios;
    };
    
    Afinacion4Cilindros.prototype.construir = function () {
        var afinacion = afinacionFactory();
        
        afinacion.bujias.push(bujiaFactory(this.precios.bujia));
        afinacion.bujias.push(bujiaFactory(this.precios.bujia));
        afinacion.bujias.push(bujiaFactory(this.precios.bujia));
        afinacion.bujias.push(bujiaFactory(this.precios.bujia));
        
        afinacion.filtrosAire.push(filtroAireFactory(this.precios.filtroAire));
        afinacion.filtrosGasolina.push(filtroGasolinaFactory(this.precios.filtroGasolina));
        
        
        afinacion.listrosAceite.push(litroAceiteFactory(this.precios.litroAceite));
        afinacion.listrosAceite.push(litroAceiteFactory(this.precios.litroAceite));
        afinacion.listrosAceite.push(litroAceiteFactory(this.precios.litroAceite));
        
        return afinacion;
    }

    return Afinacion4Cilindros;
})();

module.exports = function(precios) {
    return new Afinacion4Cilindros(precios);
}