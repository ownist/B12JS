/**
 * একটি দোকানের ইনভেন্টরি অবজেক্ট আছে যেখানে প্রোডাক্টের নাম এবং স্টকের পরিমাণ লেখা আছে (যেমন: apple: 10, orange: 0, mango: 5)। প্রোগ্রাম লিখে এমন একটি লজিক তৈরি করুন যা শুধু সেইসব প্রোডাক্টের নাম দেখাবে যেগুলোর স্টক শেষ হয়ে গেছে (অর্থাৎ মান ০)।
 */

const inventory = {
  apple: 10,
  orange: 0,
  mango: 5,
  licchi: 0,
  banana: 0,
  jackfruit: 12,
};

for (const product in inventory) {
  const value = inventory[product];

  if (value === 0) {
    console.log(`${product}: ${value} (out of stock)`);
  }
}
