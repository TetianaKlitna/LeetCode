class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  missingNumber(nums) {
    let res = 0;
    for (let i = 1; i <= nums.length; i++) {
      res += i - nums[i - 1];
    }
    return res;
  }
}
