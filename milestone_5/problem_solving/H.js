// ১ থেকে ৫০ পর্যন্ত লুপ চালাও। যদি সংখ্যাটি ৩ দিয়ে বিভাজ্য হয় তবে "Fizz", ৫ দিয়ে বিভাজ্য হলে "Buzz" এবং ৩ ও ৫ উভয় দিয়ে বিভাজ্য হলে "FizzBuzz" প্রিন্ট করো।

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log("ntg");
  }
}
