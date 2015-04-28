var Telcel = (function() {

    var Telcel = function(porMinuto, porSegundo) {
        this.porMinuto = porMinuto;
        this.porSegundo = porSegundo;
    };
        
    Telcel.prototype.ObtenerTarifa = function(saldoPorMes) {
        if (saldoPorMes > 100)
            return this.porSegundo();
        
        return this.porMinuto();
    };
    
    Telcel.prototype.facturar = function(cliente) {
        console.log('======Factura=====');
        console.log('Saldo Promedio: $' + cliente.saldoPromedio);
        var tarifa = this.ObtenerTarifa(cliente.saldoPromedio);
        
        console.log('Segundos consumidos: ' + cliente.segundosPorFacturar);
        console.log('Total a Pagar: $' +
                    tarifa.cobrar(cliente.segundosPorFacturar));
        console.log("");
    };
    

    return Telcel;
})();

module.exports = function(porMinuto, porSegundo) {
    return new Telcel(porMinuto, porSegundo);
}