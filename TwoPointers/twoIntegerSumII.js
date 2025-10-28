class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;

    while (start < end) {
      const curr = numbers[start] + numbers[end];

      if (curr > target) {
        end--;
      } else if (curr < target) {
        start++;
      } else return [start + 1, end + 1];
    }

    return null;
  }
}
