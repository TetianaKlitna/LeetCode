class Solution {
  /**
   * @param {number} n - a positive integer
   * @return {number}
   */
  hammingWeight(n) {
    return n
      .toString(2)
      .split('')
      .reduce((acc, item) => (acc += Number(item)), 0);
  }
}
