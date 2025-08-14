/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1 || str1 === '' || str2 === '') return '';
  if (str1 === str2) return str1;

  const gcd = (a, b) => {
    while (b !== 0) {
      const t = a % b;
      console.log(a, b, t);
      a = b;
      b = t;
    }
    return a;
  };
  const k = gcd(str1.length, str2.length);
  return str1.slice(0, k);
};
