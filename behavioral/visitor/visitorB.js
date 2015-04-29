var VisitorB = (function() {

    var VisitorB = function(signo) {
        this.signo = signo;
    };
    
    VisitorB.prototype.visit = function(operacion){
        console.log(operacion.a + ' ' + this.signo + ' ' + operacion.b);
    }

    return VisitorB;
})();

module.exports = function(signo) {
    return new VisitorB(signo);
}
