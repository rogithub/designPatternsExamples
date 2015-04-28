var Persona = (function() {

    var Persona = function(db) {
        this.db = db;
    };
    
    Persona.prototype.vestirme = function(dia, vestimenta) {
        this.db.guardarVestimenta(dia, vestimenta);
    }
    
    Persona.prototype.verQueTraiaPuesto = function(dia) {
        return this.db.verQueTraiaPuesto(dia);
    }

    return Persona;
})();

module.exports = function(db) {
    return new Persona(db);
}