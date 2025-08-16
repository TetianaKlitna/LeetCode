/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const seen = {};
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    const search = k - nums[i];
    if (seen[search]) {
      res++;
      seen[search]--;
      if (seen[search] === 0) delete seen[search];
      continue;
    }
    if (!seen[nums[i]]) seen[nums[i]] = 0;
    seen[nums[i]]++;
  }

  return res;
};
