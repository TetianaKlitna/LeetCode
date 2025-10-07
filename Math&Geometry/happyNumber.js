class Solution {
  /**
   * @param {number} n
   * @return {boolean}
   */
  isHappy(n) {
    const seen = new Set();

    const helper = (val) => {
      let sum = 0;
      while (val > 0) {
        const carry = val % 10;
        sum += Math.pow(carry, 2);
        val = (val - carry) / 10;
      }
      return sum;
    };

    while (n !== 1) {
      n = helper(n);
      if (seen.has(n)) break;
      seen.add(n);
    }
    console.log(seen);
    return n === 1;
  }
}
