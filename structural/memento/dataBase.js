var Database = (function() {

    var Database = function() {
        this.dias = [];
    };

    Database.prototype.guardarVestimenta = function(dia, vestimenta) {
        this.dias[dia] = vestimenta;
    };
    
    Database.prototype.verQueTraiaPuesto = function(dia) {
        return this.dias[dia];
    };

    return Database;
})();

module.exports = function() {
    return new Database();
}
