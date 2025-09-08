class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    if (s.length < 2) return s.length;

    let res = 0;

    let left = 0;
    let maxFreq = 0;
    const freq = {};

    for (let i = 0; i < s.length; i++) {
      if (!freq[s[i]]) {
        freq[s[i]] = 0;
      }
      freq[s[i]]++;
      maxFreq = Math.max(maxFreq, freq[s[i]]);

      while (i - left + 1 - maxFreq > k) {
        freq[s[left]]--;
        left++;
      }

      res = Math.max(res, i - left + 1);
    }

    return res;
  }
}
