var Iterator = (function() {

    var Iterator = function(arr) {
        this.index = -1;
        this.arr = arr;
    };
        
    Iterator.prototype.next = function() {
        this.index++;
        var result = this.arr[this.index];
        
        if (!result) {
            this.index = 0;
        }
        
        return this.arr[this.index];
    }
    

    return Iterator;
})();

module.exports = function(arr) {
    return new Iterator(arr);
}