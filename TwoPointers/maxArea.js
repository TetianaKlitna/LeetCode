/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  width = right - left;
  let max = 0;
  while (left < right) {
    max = Math.max(max, width * Math.min(height[left], height[right]));
    if (height[left] < height[right]) left++;
    else right--;
    width = right - left;
  }
  return max;
};
