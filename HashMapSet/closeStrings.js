/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  const getFreqMap = (word) => {
    const freq = {};
    for (let i = 0; i < word.length; i++) {
      if (!freq[word[i]]) freq[word[i]] = 0;
      freq[word[i]]++;
    }

    return freq;
  };

  const freq1 = getFreqMap(word1);
  const freq2 = getFreqMap(word2);

  const keysSorted1 = Object.keys(freq1).sort();
  const keysSorted2 = Object.keys(freq2).sort();
  for (let i = 0; i < keysSorted1.length; i++) {
    if (keysSorted1[i] !== keysSorted2[i]) {
      return false;
    }
  }

  const valuesSorted1 = Object.values(freq1).sort((a, b) => a - b);
  const valuesSorted2 = Object.values(freq2).sort((a, b) => a - b);
  for (let i = 0; i < valuesSorted1.length; i++) {
    if (valuesSorted1[i] !== valuesSorted2[i]) {
      return false;
    }
  }

  return true;
};
