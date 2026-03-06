/**
 * দুটি ভেরিয়েবল নিন: price (পণ্যের দাম) এবং isMember (ভোক্তা ক্লাবের মেম্বার কি না - সত্য/মিথ্যা)।
 *
 * শর্ত হলো:
 * যদি isMember সত্য হয় এবং price ৫০০ টাকার বেশি হয়, তাহলে ২০% ডিসকাউন্ট।
 * যদি isMember সত্য হয় কিন্তু price ৫০০ টাকার কম হয়, তাহলে ১০% ডিসকাউন্ট।
 * যদি isMember মিথ্যা হয়, তাহলে কোনো ডিসকাউন্ট নেই (0%)।
 * এই পুরো লজিকটি এক লাইনে nested ternary operator ব্যবহার করে লিখুন এবং ফাইনাল ডিসকাউন্ট কনসোলে দেখান।
 */

let price = 720;
let isMember = true;

// by using normal if else
if (isMember && price >= 500) {
  // 20% discount
  const discPrice = (price * 20) / 100;
  const payAmmount = price - discPrice;
  console.log(`20 % discount e total price: ${payAmmount}tk.`);
} else if (isMember && price < 500) {
  // 10% discount
  const discPrice = (price * 10) / 100;
  const payAmmount = price - discPrice;
  console.log(`10% discount e total price: ${payAmmount}tk.`);
} else {
  console.log(`0% discount e total price: ${price}tk.`);
}
