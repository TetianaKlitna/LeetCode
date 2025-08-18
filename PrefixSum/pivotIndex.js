/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return 0;
  let leftSum = 0;
  let rightSum = nums.reduce((acc, item, i) => (acc += i === 0 ? 0 : item), 0);
  console.log(leftSum, rightSum);
  if (leftSum === rightSum) return 0;

  for (let i = 1; i < nums.length; i++) {
    leftSum += nums[i - 1];
    rightSum -= nums[i];
    console.log(leftSum, rightSum);
    if (leftSum === rightSum) return i;
  }

  return -1;
};
