var ComboBase = (function() {

    var ComboBase = function(hamburguesa, papas, refresco) {
        this.hamburguesa = hamburguesa;
        this.papas = papas;
        this.refresco = refresco;
    };
    
    ComboBase.prototype.preparar = function() {
        var that = this;
        return {
            hamburguesa: that.hamburguesa,
            papas: that.papas,
            refresco: that.refresco
        };
    }

    return ComboBase;
})();

module.exports = function(hamburguesa, papas, refresco) {
    return new ComboBase(hamburguesa, papas, refresco);
}