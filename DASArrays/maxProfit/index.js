const maxProfit = prices => {
    let minPrice = prices[0];
    let maxProfit = 0;
     for(let i=1; i<prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i])

        const potentialProfit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, potentialProfit);
     }
     return maxProfit
}

const prices = [100,2,3,4,5,46,7,8,9]
console.log(maxProfit(prices))
