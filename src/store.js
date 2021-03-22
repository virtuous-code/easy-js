var check = require('./check');
var json = require('./json');

module.exports = {
    saveL: function(key, value) {
        check.storeCheck();
        check.notNullCheck(key, 'Date key');
        localStorage.setItem(key, json.toStr(value));
    },
    readL: function (key) {
        check.storeCheck();
        check.notNullCheck(key, 'Date key');
        return json.toObj(localStorage.getItem(key));
    },
    deleteL: function(key) {
        check.storeCheck();
        check.notNullCheck(key, 'Date key');
        localStorage.removeItem(key);
    },
    deleteA: function() {
        check.storeCheck();
        localStorage.clear();
    }
}