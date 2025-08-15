/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const res = [];
    const pattern = new RegExp(`^[${allowed}]+$`);
    for(let i = 0; i < words.length; i++){
         if(pattern.test(words[i])){
            res.push(words[i]);
         }
    }
    console.log(res);
    return res.length;
};