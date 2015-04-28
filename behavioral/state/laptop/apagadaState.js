var ApagadaState = (function() {

    var ApagadaState = function(laptop) {
        this.laptop = laptop;
    };
        
    ApagadaState.prototype.consumirBateria = function() {
        //no hace nada porque apagada no consume bateria
    };
    

    return ApagadaState;
})();

module.exports = function(laptop) {
    return new ApagadaState(laptop);
}