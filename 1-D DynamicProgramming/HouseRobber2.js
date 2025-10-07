class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  rob(nums) {
    const helper = (arr) => {
      if (arr.length === 1) return arr[0];

      const dp = new Array(arr.length);
      dp[0] = arr[0];
      dp[1] = Math.max(arr[0], arr[1]);

      for (let i = 2; i < arr.length; i++) {
        dp[i] = Math.max(dp[i - 1], arr[i] + dp[i - 2]);
      }
      return dp[arr.length - 1];
    };

    if (nums.length === 1) return nums[0];
    return Math.max(
      helper(nums.slice(1)),
      helper(nums.slice(0, nums.length - 1))
    );
  }
}
