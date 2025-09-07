class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    nums.sort((a, b) => a - b);

    let start = 0;
    let end = nums.length - 1;

    const res = [];

    for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i - 1] === nums[i]) continue;
      const target = -nums[i];

      start = i + 1;
      end = nums.length - 1;

      while (start < end) {
        const sum = nums[i] + nums[start] + nums[end];

        if (sum < 0) start++;
        else if (sum > 0) end--;
        else {
          res.push([nums[i], nums[start], nums[end]]);
          while (start < end && nums[start] === nums[start + 1]) start++;
          while (start < end && nums[end] === nums[end - 1]) end--;

          start++;
          end--;
        }
      }
    }

    return res;
  }
}
