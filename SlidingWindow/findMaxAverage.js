/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let start = 0;
  let sum = 0;
  let avg = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (i < k) {
      sum += nums[i];
    } else {
      sum -= nums[start];
      sum += nums[i];
      start++;
    }

    if (i >= k - 1) avg = Math.max(avg, sum / k);
  }
  return avg;
};
