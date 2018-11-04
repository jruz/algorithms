export const maxProfit = (prices) => {
  let low = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < low) {
      low = prices[i];
    }
    if (prices[i] - low > max) {
      max = prices[i] - low;
    }
  }
  return max;
};
