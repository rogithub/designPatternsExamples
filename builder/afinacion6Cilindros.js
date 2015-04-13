var afinacionFactory = require('./afinacion');
var bujiaFactory = require('./bujia');
var filtroAireFactory = require('./filtroAire');
var filtroGasolinaFactory = require('./filtroGasolina');
var litroAceiteFactory = require('./litroAceite');

var Afinacion6Cilindros = (function() {
    var Afinacion6Cilindros = function() {
        
    };
    
    Afinacion6Cilindros.prototype.construir = function () {
        var afinacion = afinacionFactory();
        
        afinacion.bujias.push(bujiaFactory(12));
        afinacion.bujias.push(bujiaFactory(12));
        afinacion.bujias.push(bujiaFactory(12));
        afinacion.bujias.push(bujiaFactory(12));
        afinacion.bujias.push(bujiaFactory(12));
        afinacion.bujias.push(bujiaFactory(12));
        
        afinacion.filtrosAire.push(filtroAireFactory(60));
        afinacion.filtrosGasolina.push(filtroGasolinaFactory(70));
        
        
        afinacion.listrosAceite.push(litroAceiteFactory(18));
        afinacion.listrosAceite.push(litroAceiteFactory(18));
        afinacion.listrosAceite.push(litroAceiteFactory(18));
        afinacion.listrosAceite.push(litroAceiteFactory(18));
        
        return afinacion;
    }

    return Afinacion6Cilindros;
})();

module.exports = function() {
    return new Afinacion6Cilindros();
}