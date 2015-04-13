var afinacionFactory = require('./afinacion');
var bujiaFactory = require('./bujia');
var filtroAireFactory = require('./filtroAire');
var filtroGasolinaFactory = require('./filtroGasolina');
var litroAceiteFactory = require('./litroAceite');

var Afinacion4Cilindros = (function() {
    var Afinacion4Cilindros = function() {
        
    };
    
    Afinacion4Cilindros.prototype.construir = function () {
        var afinacion = afinacionFactory();
        
        afinacion.bujias.push(bujiaFactory(10));
        afinacion.bujias.push(bujiaFactory(10));
        afinacion.bujias.push(bujiaFactory(10));
        afinacion.bujias.push(bujiaFactory(10));
        
        afinacion.filtrosAire.push(filtroAireFactory(50));
        afinacion.filtrosGasolina.push(filtroGasolinaFactory(60));
        
        
        afinacion.listrosAceite.push(litroAceiteFactory(18));
        afinacion.listrosAceite.push(litroAceiteFactory(18));
        afinacion.listrosAceite.push(litroAceiteFactory(18));
        
        return afinacion;
    }

    return Afinacion4Cilindros;
})();

module.exports = function() {
    return new Afinacion4Cilindros();
}