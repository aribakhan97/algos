// buy and sell stock
// say you have an array for which the ith element is the price of a given stock on day i 
// design an algo to find the maximum profit 

function buyAndSell(prices) {
    let low = Number.MAX_SAFE_INTEGER;
    let bestProfit = 0;
    for (let price of prices) {
        const profit = price - low;
        if (price < low) low = price;
        if (profit > bestProfit) bestProfit = profit;
    }
    return bestProfit;
}

// time complexity -> one for lopp O(n)
// space complexity -> O(1)

// dynamic programming
// track how a problem evoles 

var coinChange = function(coins, amount) {
    const dp = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
    dp[0] = 0;
    for(let i = 0; i < dp.length; i++) {
        for (let coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    const minCoins = dp[amount];
    if (min >= Number.MAX_SAFE_INTEGER) return -1;
    return minCoins;
};

// time complexity --> O(n * k)
// space complexity --> O(n)

// reverse integer
