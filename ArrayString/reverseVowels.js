/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = new Set('aeiouAEIOU');
  let i = 0;
  let j = s.length - 1;
  const res = [...s];
  while (i <= j) {
    const startIsVowel = vowels.has(res[i]);
    const endIsVowel = vowels.has(res[j]);
    if (!startIsVowel) {
      i++;
    }
    if (!endIsVowel) {
      j--;
    }
    if (startIsVowel && endIsVowel) {
      [res[i], res[j]] = [res[j], res[i]];
      i++;
      j--;
    }
  }
  return res.join('');
};
