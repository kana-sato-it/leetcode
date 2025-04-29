/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    }

    const profit = price - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}

// @lc code=end
