class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const res = {};
    for (let i = 0; i < strs.length; i++) {
      const sorted = strs[i].split('').sort();
      if (!res[sorted]) res[sorted] = [];
      res[sorted].push(strs[i]);
    }
    return Object.values(res);
  }
}
