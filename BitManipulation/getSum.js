class Solution {
  /**
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  getSum(a, b) {
    let carry;
    while (b !== 0) {
      carry = b & a;
      a = a ^ b;
      b = carry << 1;
    }
    return a;
  }
}
