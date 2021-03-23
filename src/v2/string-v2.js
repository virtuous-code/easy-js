
String.prototype.ymlTrim = function() {
    return this.replace(/\ /g, '');
}

String.prototype.ymlUpper = function() {
    return this.toLocaleUpperCase();
}

String.prototype.ymlLower = function() {
    return this.toLocaleLowerCase();
}

String.prototype.ymlReplace = function(s, t) {
    return this.replace(new RegExp(s, 'g'), t);
}

String.prototype.ymlCompareIgnoreCase = function(t) {
    return this.ymlUpper() === (t + '').ymlUpper();
}

String.prototype.ymlCompareIgnoreSpace = function(t) {
    return this.ymlTrim() === (t + '').ymlTrim();
}