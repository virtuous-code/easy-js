
module.exports = {
    ymlObjEqual: function(o1, o2) {
        if (!o1 || !o2) {
            return false;
        }
        const iKeys = Object.keys(o1);
        const oKeys = Object.keys(o2);
        if (iKeys.length !== oKeys.length) {
            return false;
        }
        for(let i = 0; i < iKeys.length; i++) {
            if (o1[iKeys[i]] !== o2[iKeys[i]]) {
                return false;
            }
        }
        return true;
    },
    ymlContains: function(o1, o2) {
        if (!o1 || !o2) {
            return false;
        }
        const oKeys = Object.keys(o2);
        for(let i = 0; i < oKeys.length; i++) {
            if (o1[oKeys[i]] !== o2[oKeys[i]]) {
                return false;
            }
        }
        return true;
    }
}