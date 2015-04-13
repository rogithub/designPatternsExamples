var afinacionFactory = require('./afinacion');
var bujiaFactory = require('./bujia');
var filtroAireFactory = require('./filtroAire');
var filtroGasolinaFactory = require('./filtroGasolina');
var litroAceiteFactory = require('./litroAceite');

var Afinacion8Cilindros = (function() {
    var Afinacion8Cilindros = function(precios) {
        this.precios = precios;
    };
    
    Afinacion8Cilindros.prototype.construir = function () {
        var afinacion = afinacionFactory();
        
        afinacion.bujias.push(bujiaFactory(this.precios.bujia));
        afinacion.bujias.push(bujiaFactory(this.precios.bujia));
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
        afinacion.listrosAceite.push(litroAceiteFactory(this.precios.litroAceite));
        
        return afinacion;
    }

    return Afinacion8Cilindros;
})();

module.exports = function(precios) {
    return new Afinacion8Cilindros(precios);
}