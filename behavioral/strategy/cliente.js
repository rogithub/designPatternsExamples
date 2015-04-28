var Cliente = (function() {

    var Cliente = function(saldoPromedio, segundosPorFacturar) {
        this.saldoPromedio = saldoPromedio;
        this.segundosPorFacturar = segundosPorFacturar;
    };

    return Cliente;
})();

module.exports = function(saldoPromedio, segundosPorFacturar) {
    return new Cliente(saldoPromedio, segundosPorFacturar);
}