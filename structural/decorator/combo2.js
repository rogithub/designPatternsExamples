var Combo2 = (function() {

    var Combo2 = function(comboBase) {
        this.comboBase = comboBase;
    };
    
    Combo2.prototype.preparar = function() {
        var that = this;
        
        that.comboBase.hamburguesa.carnes += 2;
        that.comboBase.papas.gramos += 100;
        that.comboBase.refresco.mililitros += 200;
        
        return that.comboBase.preparar();
    }

    return Combo2;
})();

module.exports = function(comboBase) {
    return new Combo2(comboBase);
}