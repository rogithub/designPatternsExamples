var afinacionFactory = require('./afinacion');
var bujiaFactory = require('./bujia');
var filtroAireFactory = require('./filtroAire');
var filtroGasolinaFactory = require('./filtroGasolina');
var litroAceiteFactory = require('./litroAceite');

var Afinacion6Cilindros = (function() {
    var Afinacion6Cilindros = function(precios) {
        this.precios = precios;
    };
    
    Afinacion6Cilindros.prototype.construir = function () {
        var afinacion = afinacionFactory();
        
        afinacion.bujias.push(bujiaFactory(this.precios.bujia));
        afinacion.bujias.push(bujiaFactory(this.precios.bujia));
        afinacion.bujias.push(bujiaFactory(this.precios.bujia));
        afinacion.bujias.push(bujiaFactory(this.precios.bujia));
        afinacion.bujias.push(bujiaFactory(this.precios.bujia));
        afinacion.bujias.push(bujiaFactory(this.precios.bujia));
        
        afinacion.filtrosAire.push(filtroAireFactory(this.precios.filtroAire));
        afinacion.filtrosGasolina.push(filtroGasolinaFactory(this.precios.filtroGasolina));
        
        
        afinacion.listrosAceite.push(litroAceiteFactory(this.precios.litroAceite));
        afinacion.listrosAceite.push(litroAceiteFactory(this.precios.litroAceite));
        afinacion.listrosAceite.push(litroAceiteFactory(this.precios.litroAceite));
        afinacion.listrosAceite.push(litroAceiteFactory(this.precios.litroAceite));
        
        return afinacion;
    }

    return Afinacion6Cilindros;
})();

module.exports = function(precios) {
    return new Afinacion6Cilindros(precios);
}