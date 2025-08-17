/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let start = 0;
  let maxSum = 0;
  let flippedZeros = 0;
  for (let end = 0; end < nums.length; end++) {
    
    if (nums[end] === 0) flippedZeros++;
    
    while (flippedZeros > k) {
      if (nums[start] === 0) flippedZeros--;
      start++;
    }

    maxSum = Math.max(maxSum, end - start + 1);

  }

  return maxSum;
};
