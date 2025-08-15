/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const acc = {};
  let word;
  for (let i = 0; i < words.length; i++) {
    word = words[i];
    if (!acc[word]) {
      acc[word] = 0;
    }
    acc[word]++;
  }
  const topK = Object.entries(acc)
    .sort(([a1, a], [b1, b]) => b - a || a1.localeCompare(b1))
    .slice(0, k);
  const obj = Object.fromEntries(topK);

  return Object.keys(obj);
};
