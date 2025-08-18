/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const answers = [[], []];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  for (let num of set1) {
    if (!set2.has(num)) answers[0].push(num);
  }
  for (let num of set2) {
    if (!set1.has(num)) answers[1].push(num);
  }
  return answers;
};
