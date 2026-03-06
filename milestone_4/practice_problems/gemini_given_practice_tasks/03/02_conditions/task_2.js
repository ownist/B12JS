/**
 * একটি ভেরিয়েবলে ছাত্রের প্রাপ্ত নম্বর (০-১০০ এর মধ্যে) রাখুন। এবার শর্ত দিন:
 *
 * নম্বর ৮০ বা তার বেশি হলে "A+"
 * ৭০ বা তার বেশি হলে "A"
 * ৬০ বা তার বেশি হলে "A-"
 * এর নিচে হলে "F"
 * সঠিক গ্রেডটি কনসোলে প্রিন্ট করুন।
 */

let marks = 69;

if (marks >= 80 && marks <= 100) {
  console.log("A+");
} else if (marks >= 70 && marks < 80) {
  console.log("A");
} else if (marks >= 60 && marks < 70) {
  console.log("A-");
} else if (marks >= 0 && marks < 60) {
  console.log("F");
} else {
  console.log("Invalid Marks");
}
