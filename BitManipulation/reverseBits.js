class Solution {
  /**
   * @param {number} n - a positive integer
   * @return {number} - a positive integer
   */
  reverseBits(n) {
    const num2 = n.toString(2);
    const res = '0'
      .repeat(32 - num2.length)
      .concat(num2)
      .split('')
      .reverse()
      .join('');
    return parseInt(res, 2);
  }
}
