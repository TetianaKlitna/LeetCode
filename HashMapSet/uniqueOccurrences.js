/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (!freq[arr[i]]) freq[arr[i]] = 0;
    freq[arr[i]]++;
  }
  const set = new Set(Object.values(freq));
  return set.size === Object.entries(freq).length;
};
