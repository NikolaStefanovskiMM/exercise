var mobilePrice = 119.95;
var tax = 5;

var quantity = prompt(`Enter how many pieces whant to by: `);
var parseQuantity = parseInt(quantity);

var mobileTax = (tax / 100) * mobilePrice;
var sum = (mobileTax + mobilePrice) * parseQuantity;

console.log(`Mobile price is: ` + mobilePrice);
console.log(`Tax for one piece is: ` + mobileTax);
console.log(`Price for mobile include tax is:` + (mobileTax + mobilePrice));
console.log(`Your price for ${quantity} pieces is: ` + sum);