/**
 * একটি শপিং কার্ট অবজেক্ট তৈরি করুন যেখানে ৩টি ভিন্ন প্রোডাক্টের নাম এবং তাদের দাম প্রপার্টি হিসেবে আছে (যেমন: shirt: 500, pant: 800, shoe: 1200)। প্রোগ্রাম লিখে বের করুন কার্টের মোট দাম (Total Cost) কত।
 */

const cart = {
  shirt: 500,
  pant: 800,
  shoe: 1200,
};

// total cost
console.log(`Total Cost: ${cart.shirt + cart.pant + cart.shoe}tk.`);
