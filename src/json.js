var fnError = require('./error');

module.exports = {
    toObj: function(str) {
        try {
            return JSON.parse(str);       
        } catch (error) {
            fnError('Your input is not a valid json object string');
        }
    },
    toStr: function(obj) {
        try {
            return JSON.stringify(obj);
        } catch (error) {
            fnError('Your input is not a valid json object');
        }
    }
}