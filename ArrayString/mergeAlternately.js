/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let res = '';
  let j = 0;
  for (let i = 0; i < word1.length; i++) {
    res += word1[i];
    if (j < word2.length) {
      res += word2[j];
      j++;
    }
  }
  if (j < word2.length) {
    res += word2.slice(j);
  }

  return res;
};

console.log(mergeAlternately('abc', 'pqr') === 'apbqcr');
console.log(mergeAlternately('ab', 'pqrs') === 'apbqrs');
console.log(mergeAlternately('abcd', 'pq') === 'apbqcd');
