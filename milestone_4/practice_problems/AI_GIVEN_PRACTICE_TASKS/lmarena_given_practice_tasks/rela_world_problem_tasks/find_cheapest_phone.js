/**
 * ২. সবচেয়ে কম দামী ফোন খুঁজে বের করা (Find Cheapest Phone)
 *
 * আপনার কাছে বিভিন্ন ব্র্যান্ডের ফোনের একটি তালিকা (Array of Objects) আছে। প্রতিটি অবজেক্টে ফোনের নাম এবং price আছে।
 *
 * একটি ফাংশন লিখুন যা এই ফোনের অ্যারেটি ইনপুট হিসেবে নেবে।
 * ফাংশনটি লুপ এবং কন্ডিশন ব্যবহার করে সবচেয়ে কম দামের ফোনটি খুঁজে বের করবে এবং সেই ফোনটির নাম (Name) রিটার্ন করবে।
 */

const phones = [
  { name: "iPhone", price: 100020 },
  { name: "Honor", price: 15000 },
  { name: "Samsung", price: 100010 },
  { name: "Realme", price: 17000 },
  { name: "Redme", price: 20000 },
];

function findCheapestPhone(products) {
  let cheapestPhone = products[0];

  for (const phn of products) {
    if (phn.price < cheapestPhone.price) {
      cheapestPhone = phn;
    }
  }
  // return cheapest phone name
  return cheapestPhone.name;
}

const productsValue = phones;
const cheapestPhone = findCheapestPhone(productsValue);
console.log(`Cheapest Phone is: ${cheapestPhone}`);
