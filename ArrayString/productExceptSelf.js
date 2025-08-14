/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prod = 1;
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    res.push(prod);
    prod *= nums[i];
  }
  prod = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= prod;
    prod *= nums[i];
  }

  return res;
};

//  1   2  6   24
//  24 24  12  4
