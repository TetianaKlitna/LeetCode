/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const res = [];
  for (let i = 0; i <= n; i++) {
    let sum = 0;
    let n = i;
    while (n > 0) {
      sum += n % 2;
      n = Math.floor(n / 2);
    }
    res.push(sum);
  }
  return res;
};
