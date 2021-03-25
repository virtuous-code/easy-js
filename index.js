var store = require('./src/store');
var json = require('./src/json');
var string = require('./src/string');
var array = require('./src/array');

require('./src/v2/array-v2');
require('./src/v2/object');
require('./src/v2/string-v2');

module.exports = {
    store, json, string, array
}