/**
 * একজন এমপ্লয়ির অবজেক্ট তৈরি করুন। তার বেসিক তথ্যের পাশাপাশি 'address' নামে একটি প্রপার্টি থাকবে, যা নিজেই একটি অবজেক্ট (এর ভেতরে থাকবে city, country, road no)। এখন আপনাকে সেই নেস্টেড অবজেক্ট থেকে শুধু 'road no' টি এক্সেস করে প্রিন্ট করতে হবে।
 */

const employee = {
  name: "Shahed",
  age: 17,
  designation: "Web Developer",
  address: {
    city: "Dhaka",
    country: "BD-Bangladesh",
    "road no": 1207,
  },
};
console.log(`Road No: ${employee.address["road no"]}`);
