var Manager = (function() {

    var Manager = function(rayitas, asteriscos) {
        this.currentState = null;
        this.states = {
            rayitas: rayitas(),
            asteriscos: asteriscos()
        };
        this.changeState('rayitas');
    };
        
    Manager.prototype.changeState = function(state) {
        this.currentState = this.states[state];
        this.print();
    };
    
    Manager.prototype.print = function() {
        this.currentState.print();
    }
    

    return Manager;
})();

module.exports = function(rayitas, asteriscos) {
    return new Manager(rayitas, asteriscos);
}