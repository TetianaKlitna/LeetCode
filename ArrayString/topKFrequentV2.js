class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const freq = {};
    for (let i = 0; i < nums.length; i++) {
      if (!freq[nums[i]]) freq[nums[i]] = 0;
      freq[nums[i]]++;
    }

    const entries = Object.entries(freq).sort(([a1, a2], [b1, b2]) => b2 - a2);
    return entries.map((entry) => Number(entry[0])).slice(0, k);
  }
}
