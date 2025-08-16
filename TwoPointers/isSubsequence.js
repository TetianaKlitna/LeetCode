/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length > t.length) return false;
    let l = 0;
    for(let r = 0; r < t.length; r++){
          if(t[r] === s[l]) l++;
    }
    return s.length === l;
};