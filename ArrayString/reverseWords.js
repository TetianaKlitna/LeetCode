/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   let str = s.trim().split(' ').filter(word => word.trim());
   let i = 0;
   let j = str.length - 1;
   while(i < j){
    [str[i], str[j]] = [str[j], str[i]];
    i++; j--;
   }
   return str.join(' ');
}