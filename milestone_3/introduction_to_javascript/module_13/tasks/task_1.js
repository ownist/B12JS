/**
 * এই টাস্কে বলা হয়েছে—
তোমার কাছে মোট কত টাকা আছে, আর ১ কেজি কমলা ও ১ কেজি আপেলের মোট দাম কত—
এই দুইটা জানার পর হিসাব করে বলতে হবে দোকানদার তোমাকে কত টাকা ফেরত দেবে।
 */

var moneyIhave = 1000;
var oneKgApple = 500;
var oneKgOrange = 300;

// total price
var totalPrice = oneKgApple + oneKgOrange;

var returnTk = moneyIhave - totalPrice;

// dokandar amake ferot dibe
console.log(`dokandar amake ferot dibe: ৳${returnTk} tk.`);
