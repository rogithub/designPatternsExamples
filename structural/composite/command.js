var Command = (function() {

    var Command = function(action) {
        this.action = action;
    };

    Command.prototype.execute = function() {
        console.log(this.action);
    };

    return Command;
})();

module.exports = function(action) {
    return new Command(action);
}
