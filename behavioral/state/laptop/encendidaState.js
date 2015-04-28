var EncendidaState = (function() {

    var EncendidaState = function(laptop) {
        this.laptop = laptop;
        this.intervalId = undefined;
    };
        
    EncendidaState.prototype.consumirBateria = function() {
        var that = this;
        this.intervalId = setInterval(function(){
            
            if (that.laptop.bateria <= 10) {
                clearInterval(that.intervalId);
                that.laptop.apagar();
            }
            
            that.laptop.bateria -= 10;
            console.log('Batería: ' + that.laptop.bateria + '%');
            
        }, 1000);
    };
    

    return EncendidaState;
})();

module.exports = function(laptop) {
    return new EncendidaState(laptop);
}