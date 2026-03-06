/**
 * এই টাস্কে যা করতে বলা হয়েছে তা হলো—

একজন ছাত্রের তথ্য নিয়ে বানানো একটা অবজেক্ট দেওয়া আছে

ওই অবজেক্টের ভেতরে physics নামে আরেকটা ভেতরের অবজেক্ট আছে

সেই physics অবজেক্টের ভেতরে marks নামে যে নাম্বার আছে,

সেই physics-এর নাম্বারটাই আউটপুটে দেখাতে বলা হয়েছে
 */

const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};
console.log(student.physics.marks);
