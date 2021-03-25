
Object.prototype.ymlEqual = function(o) {
    if (!o) {
        return false;
    }
    const iKeys = keys(this);
    const oKeys = keys(o);
    if (iKeys.length !== oKeys.length) {
        return false;
    }
    for(let i = 0; i < iKeys.length; i++) {
        if (this[iKeys[i]] !== o[iKeys[i]]) {
            return false;
        }
    }
    return true;
}

Object.prototype.ymlContains = function(o) {
    if (!o) {
        return false;
    }
    const oKeys = keys(o);
    for(let i = 0; i < oKeys.length; i++) {
        if (this[oKeys[i]] !== o[oKeys[i]]) {
            return false;
        }
    }
    return true;
}