class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const set = new Set(nums);
    let max = 0;
    let curr = 0;
    for (let i = 0; i < nums.length; i++) {
      while (set.has(nums[i]++)) {
        curr++;
      }
      max = Math.max(max, curr);
      curr = 0;
    }
    return max;
  }
}
