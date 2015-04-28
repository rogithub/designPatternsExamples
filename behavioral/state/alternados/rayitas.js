var Rayitas = (function() {

    var Rayitas = function() {
        
    };
        
    Rayitas.prototype.print = function() {
        console.log('---');
    }
    

    return Rayitas;
})();

module.exports = function() {
    return new Rayitas();
}