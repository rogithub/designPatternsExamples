var FlyweightSoldier = (function () {
    function FlyweightSoldier() { }
    
    FlyweightSoldier.prototype.Health = 10;
    FlyweightSoldier.prototype.FightingAbility = 5;
    FlyweightSoldier.prototype.Hunger = 0;
    
    return FlyweightSoldier;
})();

module.exports = function() {
    return new FlyweightSoldier();
}