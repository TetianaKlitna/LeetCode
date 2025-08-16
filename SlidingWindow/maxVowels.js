/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let start = 0;
  let res = -Infinity;
  let max = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < s.length; i++) {
    if (i < k) {
      if (vowels.includes(s[i])) max++;
    } else {
      if (vowels.includes(s[start])) max--;
      if (vowels.includes(s[i])) max++;
      start++;
    }
    if (i >= k - 1) {
      res = Math.max(res, max);
    }
  }

  return res;
};
