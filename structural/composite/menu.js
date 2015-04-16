var Menu = (function() {

    var Menu = function(name, command) {
        this.name = name;
        this.command = command || null;
        this.submenus = [];
    };

    return Menu;
})();

module.exports = function(name, command) {
    return new Menu(name, command);
}
