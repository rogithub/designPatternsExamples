var Combo1 = (function() {

    var Combo1 = function(comboBase) {
        this.comboBase = comboBase;        
    };
    
    Combo1.prototype.preparar = function() {
        var that = this;
        
        that.comboBase.hamburguesa.carnes++;
        that.comboBase.papas.gramos += 50;
        that.comboBase.refresco.mililitros += 100;
        
        return {
            hamburguesa: that.comboBase.hamburguesa,
            papas: that.comboBase.papas,
            refresco: that.comboBase.refresco
        };
    }

    return Combo1;
})();

module.exports = function(comboBase) {
    return new Combo1(comboBase);
}