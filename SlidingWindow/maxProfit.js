class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    if (prices.length < 2) return 0;

    let buy = 0;
    let res = 0;
    for (let sell = 1; sell < prices.length; sell++) {
      if (prices[sell] < prices[buy]) {
        buy = sell;
        continue;
      }
      res = Math.max(res, prices[sell] - prices[buy]);
    }

    return res;
  }
}
