/**
 * ১. ই-কমার্স চেকআউট (Calculate Total Cost)
 *
 * মনে করুন আপনি একটি ই-কমার্স ওয়েবসাইটের জন্য কাজ করছেন।
 *
 * একটি ফাংশন লিখুন যা ইনপুট হিসেবে একটি Products Array নেবে।
 * অ্যারের প্রতিটি উপাদানে (Object) পণ্যের নাম, price এবং quantity থাকবে।
 * ফাংশনটি লুপ চালিয়ে সব পণ্যের মোট দাম (Price * Quantity) হিসাব করবে এবং সর্বমোট খরচ (Total Cost) রিটার্ন করবে।
 */

const products = [
  { name: "Laptop", price: 80000, quantity: 5 },
  { name: "Mobile", price: 15000, quantity: 1 },
  { name: "Mouse", price: 600, quantity: 3 },
];

function calculateTotalCost(products) {
  let totalCost = 0;

  for (const product of products) {
    const totalPrice = product.price * product.quantity;
    totalCost += totalPrice;
  }
  // return total cost
  return totalCost;
}

const productsValue = products;
const totalCost = calculateTotalCost(productsValue);
console.log(`Total Cost: ${totalCost}`);
