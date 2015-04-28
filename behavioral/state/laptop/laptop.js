var Laptop = (function() {

    var Laptop = function(encendida, apagada) {
        this.bateria = 50;
        var that = this;
        this.states = {
            encendida: encendida(that),
            apagada: apagada(that)
        };
        this.apagar();
    };
        
    Laptop.prototype.changeState = function(state) {
        this.currentState = this.states[state];
        this.currentState.consumirBateria();
        console.log('estado actual: ' + state);
    };
    
    Laptop.prototype.encender = function() {
        this.changeState('encendida');
    }
    
    Laptop.prototype.apagar = function() {
        this.changeState('apagada');
    }

    return Laptop;
})();

module.exports = function(encendida, apagada) {
    return new Laptop(encendida, apagada);
}