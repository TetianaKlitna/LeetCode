class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    const freq = s1.split('').reduce((acc, ch) => {
      acc.set(ch, (acc.get(ch) || 0) + 1);
      return acc;
    }, new Map());

    let start = 0;

    for (let i = 0; i < s2.length; i++) {
      if (freq.has(s2[i]) && freq.get(s2[i]) > 0) {
        freq.set(s2[i], freq.get(s2[i]) - 1);
        if ([...freq.values()].filter((item) => item !== 0).length === 0)
          return true;
      } else {
        while (start < i) {
          if (freq.has(s2[start])) freq.set(s2[start], freq.get(s2[start]) + 1);
          if (freq.has(s2[i]) && freq.get(s2[i]) > 0) {
            i--;
            break;
          }
          start++;
        }
      }
    }

    return false;
  }
}
