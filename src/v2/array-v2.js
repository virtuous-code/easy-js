
var check = require('../check');

Array.prototype.ymlDelete = function(indexes) {
    check.isArrayCheck(indexes);
    check.numberCheck(indexes);
    indexes.sort(function(cur, next) {
        return cur > next ? 1 : -1;
    });
    const l = this.length;
    for(var i = l - 1; i >= 0; i --) {
        if (indexes.indexOf(i) > -1) this.splice(i, 1);
    }
    return this;
}

Array.prototype.ymlCompareWithSort = function(target) {
    check.isArrayCheck(target);
    check.notObjectCheck(this.concat(target));
    var _this = this.sort();
    var _target = target.sort();
    return _compare(_this, _target);
}

Array.prototype.ymlCompareWithoutSort = function(target) {
    check.isArrayCheck(target);
    check.notObjectCheck(this.concat(target));
    return _compare(this, target);
}

function _compare(a1, a2) {
    var _equaled = a1.length === a2.length;
    if (_equaled) {
        for(var i = 0; i < a1.length; i ++) {
            _equaled = a1[i] === a2[i];
            if (!_equaled) return _equaled;
        }
    }
    return _equaled;
}