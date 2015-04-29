var Visitor = (function() {

    var Visitor = function() {
        
    };
    
    Visitor.prototype.visit = function(operacion){
        console.log(operacion.resultado());
    }

    return Visitor;
})();

module.exports = function() {
    return new Visitor();
}
