/*
Given an array of stock prices, return the maximum profit that can be made where:
- the values in the array represent the stock prices at a specific time past the hour
- the indices represent the minutes past the hour of trading time

There is no "shorting" - selling before buying. You must buy first before you sell.

Given [21, 7, 5, 15, 1, 9]

At 2 minutes past the hour, buy at $5 and sell at 3 minutes past the hour at $15 for a maximum profit of $10.

You can't sell at 3 minutes past the hour at $15 and then buy at 4 minutes past the hour at $1 for a maximum profit of $14.

You want to find the maximum difference, for a profit, with the caveat that the buy index always precedes (is less than) the sell index.

The gotcha in this challenge is returning the minimal loss as well as the maximum gain.
*/

function getMaxProfit(stockPrices) {

  if (stockPrices.length < 2) {
    throw new Error("At least 2 prices needed.");
  }

}
