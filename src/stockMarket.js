function getMaxProfit(stockPrices) {

  if (stockPrices.length < 2) {
    throw new Error("At least 2 prices needed.");
  }

  // initialize lowest price and highest profit, so far
  // **be aware of how you're initializing
  // profit = price bought < price sold
  // loss = price bought > price sold
  var minPrice = stockPrices[0];
  var maxProfit = stockPrices[1] - stockPrices[0];
  console.log("initial profit " +maxProfit);

  // iterate through prices but start at 2nd index to compare
  // **watch order of operation:
  //  - for max profit
  //  - for min price
  for (var i=1; i<stockPrices.length; i++) {
    if (maxProfit < stockPrices[i] - minPrice) {
      maxProfit = stockPrices[i] - minPrice;
    }
    console.log(maxProfit+ " = " +stockPrices[i]+ " - " +minPrice);
    if (stockPrices[i] < minPrice) {
      minPrice = stockPrices[i];
    }
  }
  return maxProfit;
}
