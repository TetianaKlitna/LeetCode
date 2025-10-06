class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  canJump(nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
      console.log(maxReach);
      if (i > maxReach) return false;
      maxReach = Math.max(maxReach, i + nums[i]);
    }

    return true;
  }
}
