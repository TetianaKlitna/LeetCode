class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    if (s.length < 2) return s.length;

    let start = 0;
    const set = new Set();
    let res = 0;

    for (let end = 0; end < s.length; end++) {
      while (set.has(s[end])) {
        set.delete(s[start]);
        start++;
      }

      set.add(s[end]);
      res = Math.max(res, end - start + 1);
    }

    return res;
  }
}
