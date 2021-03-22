var fnError = require('./error');

module.exports = {
    storeCheck: function () {
        try {
            localStorage.setItem('lst', +new Date());
            localStorage.getItem('lst');
        } catch (e) {
            fnError('Local storage is not available in your browser');
        }
    },
    notNullCheck: function(value, text) {
        if(value === undefined || value === '' || value === null) {
            fnError(`${text} is mandatory!`)
        }
    }
}