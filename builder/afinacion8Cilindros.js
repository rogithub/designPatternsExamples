var afinacionFactory = require('./afinacion');
var bujiaFactory = require('./bujia');
var filtroAireFactory = require('./filtroAire');
var filtroGasolinaFactory = require('./filtroGasolina');
var litroAceiteFactory = require('./litroAceite');

var Afinacion8Cilindros = (function() {
    var Afinacion8Cilindros = function() {
        
    };
    
    Afinacion8Cilindros.prototype.construir = function () {
        var afinacion = afinacionFactory();
        
        afinacion.bujias.push(bujiaFactory(14));
        afinacion.bujias.push(bujiaFactory(14));
        afinacion.bujias.push(bujiaFactory(14));
        afinacion.bujias.push(bujiaFactory(14));
        afinacion.bujias.push(bujiaFactory(14));
        afinacion.bujias.push(bujiaFactory(14));
        afinacion.bujias.push(bujiaFactory(14));
        afinacion.bujias.push(bujiaFactory(14));
        
        afinacion.filtrosAire.push(filtroAireFactory(70));
        afinacion.filtrosGasolina.push(filtroGasolinaFactory(80));
        
        
        afinacion.listrosAceite.push(litroAceiteFactory(18));
        afinacion.listrosAceite.push(litroAceiteFactory(18));
        afinacion.listrosAceite.push(litroAceiteFactory(18));
        afinacion.listrosAceite.push(litroAceiteFactory(18));
        afinacion.listrosAceite.push(litroAceiteFactory(18));
        
        return afinacion;
    }

    return Afinacion8Cilindros;
})();

module.exports = function() {
    return new Afinacion8Cilindros();
}