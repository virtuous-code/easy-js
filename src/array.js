
var check = require('./check');

module.exports = {
    compareWithSort: function(a1, a2) {
        check.isArrayCheck(a1);
        check.isArrayCheck(a2);
        check.notObjectCheck(a1.concat(a2));
        var _a1 = a1.sort();
        var _a2 = a2.sort();
        return this.compareWithoutSort(_a1, _a2);
    },
    compareWithoutSort: function(a1, a2) {
        check.isArrayCheck(a1);
        check.isArrayCheck(a2);
        check.notObjectCheck(a1.concat(a2));
        var _equaled = a1.length === a2.length;
        if (_equaled) {
            for(var i = 0; i < a1.length; i ++) {
                _equaled = a1[i] === a2[i];
                if (!_equaled) return _equaled;
            }
        }
        return _equaled;
    },
    delete: function(ori, indexes) {
        check.isArrayCheck(ori);
        check.isArrayCheck(indexes);
        check.numberCheck(indexes);
        indexes.sort(function(cur, next) {
            return cur > next ? 1 : -1;
        });
        const l = ori.length;
        for(var i = l - 1; i >= 0; i --) {
            if (indexes.indexOf(i) > -1) ori.splice(i, 1);
        }
        return ori;
    }
}