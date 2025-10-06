class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxSubArray(nums) {
    let currSum = nums[0];
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (currSum < 0) {
        currSum = 0;
      }
      currSum += nums[i];
      sum = Math.max(sum, currSum);
    }

    return sum;
  }
}
