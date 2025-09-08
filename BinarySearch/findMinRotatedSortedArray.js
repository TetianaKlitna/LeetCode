class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findMin(nums) {
    let start = 0;
    let end = nums.length - 1;

    let res = nums[0];

    while (start <= end) {
      if (nums[start] <= nums[end]) {
        res = Math.min(nums[start], res);
        break;
      }

      const mid = Math.floor((start + end) / 2);
      res = Math.min(res, nums[mid]);
      if (nums[start] > nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    return res;
  }
}
