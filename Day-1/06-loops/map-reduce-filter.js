
// Map() function

const priceUSD = [10,20,30,40,50];
const priceINR = priceUSD.map(price => price*85);

console.log(priceINR);


// Filter() function

const prices = [5000, 12000, 3000, 20000, 80000];

const expensiveItems = prices.filter(price => price > 10000);

console.log(expensiveItems);


// reduce() function

const cartPrices = [100000, 250000, 30000, 15000];

const totalBill = cartPrices.reduce((total, price) => total + price, 0);

console.log(totalBill);

