class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const res = new Array(temperatures.length).fill(0);
    const stack = [];
    for (let i = 0; i < temperatures.length; i++) {
      const curr = temperatures[i];
      while (stack.length > 0 && curr > stack[stack.length - 1][0]) {
        const ind = stack.pop()[1];
        res[ind] = i - ind;
      }
      stack.push([curr, i]);
      console.log(stack);
    }

    return res;
  }
}
