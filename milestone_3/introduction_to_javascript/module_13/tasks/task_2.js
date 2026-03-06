/**
 * Task-2 এর মানে কী

এই টাস্কে বলা হয়েছে—
একজন ছাত্রের ৫টা বিষয়ের নাম্বার দেওয়া থাকবে।
এই ৫টা নাম্বার যোগ করে গড় (average) বের করতে হবে
এবং ফলাফল দশমিকের পর ২ ঘর পর্যন্ত দেখাতে হবে।
 */

var mathematics = 65;
var biology = 85;
var chemistry = 94;
var physics = 65;
var bengali = 75;

// total marks
var totalMarks = mathematics + biology + chemistry + physics + bengali;
// console.log(totalMarks);

var avgMark = totalMarks / 5;
console.log(avgMark.toFixed(2));
