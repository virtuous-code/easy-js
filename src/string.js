var check = require('./check');

module.exports = {
    upper: function(input) {
        check.toStrCheck(input);
        return (input + '').toLocaleUpperCase();
    },
    lower: function(input) {
        check.toStrCheck(input);
        return (input + '').toLocaleLowerCase();
    },
    trim: function(input) {
        check.toStrCheck(input);
        return (input + '').replace(/\ /g, '');
    },
    replace: function(input, ori, tar) {
        check.toStrCheck(input);
        check.notNullCheck(ori, 'The string to be replaced')
        return (input + '').replace(new RegExp(ori, 'g'), tar);
    },
    compareIgnoreCase: function(s1, s2) {
        check.toStrCheck(s1);
        check.toStrCheck(s2);
        return this.upper(s1) === this.upper(s2);
    },
    compareIgnoreSpace: function(s1, s2) {
        check.toStrCheck(s1);
        check.toStrCheck(s2);
        return this.trim(s1) === this.trim(s2);
    }
}