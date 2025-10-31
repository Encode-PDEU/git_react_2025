// Imagine having a list of products in the amazon cart and we want to calculate the total bill of our items.
const cartPrices = [1000, 250, 30000, 15];
let total = 0;

for (let i = 0; i < cartPrices.length; i++) {
  total += cartPrices[i];
  console.log(`Added $${cartPrices[i]} to cart. Current total: $${total}`);
}

console.log(`🛒 Final total: $${total}`);


//Everyone do play a game but here is a practical example of one of the feature that is the Game starting in...
let countdown = 5;

while (countdown > 0) {
  console.log(`Game starting in ${countdown}...`);
  countdown--; // Decrease countdown each loop
}

console.log("🎮 Game started!");