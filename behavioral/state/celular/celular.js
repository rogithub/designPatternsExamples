var Celular = (function() {

    var Celular = function(sonar, vibrar) {
        this.currentState = null;
        this.states = {
            sonar: sonar(),
            vibrar: vibrar()
        };
        this.changeState('sonar');
    };
        
    Celular.prototype.changeState = function(state) {
        console.log('state set to ' + state);
        this.currentState = this.states[state]; 
        
    };
    
    Celular.prototype.recibirLlamada = function() {
        this.currentState.notificar();
    }    

    return Celular;
})();

module.exports = function(sonar, vibrar) {
    return new Celular(sonar, vibrar);
}