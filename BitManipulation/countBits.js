/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const res = [];
  for (let i = 0; i <= n; i++) {
    const binary = i.toString(2);
    const sum = binary.split('').reduce((acc, ch) => acc + Number(ch), 0);
    res.push(sum);
  }
  return res;
};
