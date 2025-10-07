class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    if (nums.length === 1) return target === nums[0] ? 0 : -1;

    if (target < nums[0] || nums[nums.length - 1] < target) return -1;

    let start = 0;
    let end = nums.length - 1;
    let mid;

    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (target < nums[mid]) {
        end = mid - 1;
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        return mid;
      }
    }

    return -1;
  }
}
