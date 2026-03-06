/**
 * এই টাস্কে যা করতে বলা হয়েছে তা হলো—

একটা student নামের অবজেক্ট দেওয়া আছে

ওই অবজেক্টের ভেতরে মোট কতগুলো প্রপার্টি আছে সেটা গুনতে বলা হয়েছে

প্রপার্টি মানে হলো যেমন: নাম, বয়স, শহর, ছাত্র কি না—এই ধরনের তথ্য

সবগুলো গুনে সংখ্যাটা আউটপুট হিসেবে দেখাতে হবে
 */

let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
  studentId: 331558,
};

let newProp = [];
for (const prop in student) {
  newProp.push(prop);
}
console.log(`total property: ${newProp.length}`);
console.log(newProp);
