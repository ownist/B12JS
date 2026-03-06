/**
 * এই টাস্কে যা করতে বলা হয়েছে তা হলো—

একটা গাড়ির তথ্য নিয়ে বানানো অবজেক্ট দেওয়া আছে

ওই অবজেক্টের ভেতরে নতুন একটা তথ্য যোগ করতে বলা হয়েছে

নতুন তথ্যটার নাম হবে “passenger capacity”

আর এই তথ্যটার মান হবে ৫
 */
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

car["passenger capacity"] = 5;
console.log(car);
