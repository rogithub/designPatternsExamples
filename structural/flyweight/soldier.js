var Soldier = (function () {
     function Soldier() {
       this.Health = 10;
       this.FightingAbility = 5;
       this.Hunger = 0;
     }
     return Soldier;
})();

module.exports = function() {
    return new Soldier();
}