/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let start = 0;
  let theLongest = 0;
  let gap = 0;
  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === 0) gap++;

    while (gap > 1) {
      if (nums[start] === 0) gap--;
      start++;
    }

    theLongest = Math.max(theLongest, end - start);
  }

  return theLongest;
};
