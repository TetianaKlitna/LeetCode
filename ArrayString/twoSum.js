/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const search = target - nums[i];
    if (seen[search] !== undefined) {
      return [i, seen[search]];
    }

    seen[nums[i]] = i;
  }

  return [];
};
