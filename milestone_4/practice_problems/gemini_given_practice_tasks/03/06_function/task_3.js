/**
 * ৩. শপিং কার্ট টোটাল (Shopping Cart Total)
 *
 * একটি ফাংশন লিখুন যা তিনটি আর্গুমেন্ট নেবে: ১) পণ্যের দাম, ২) পণ্যের পরিমাণ (Quantity) এবং ৩) ট্যাক্স রেট (শতাংশে)। ফাংশনটি মোট খরচ হিসাব করে রিটার্ন করবে।
 */

function shoppingCart(productPrice, quantity, taxRate) {
  // total price
  const totalPrice = productPrice * quantity;
  // tax rate
  const totalTax = (totalPrice * taxRate) / 100;
  // payAmmount
  const payAmmount = totalPrice + totalTax;
  return payAmmount;
}

const result = shoppingCart(50, 2, 10);
console.log(result.toFixed(2));
