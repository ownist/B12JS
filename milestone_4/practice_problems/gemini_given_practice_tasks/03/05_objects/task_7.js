/**
 * দুটি আলাদা অবজেক্ট আছে। একটিতে ছাত্রের ব্যক্তিগত তথ্য (নাম, বয়স), আরেকটিতে একাডেমিক তথ্য (ক্লাস, রোল)। কোনো বিল্ট-ইন মেথড ছাড়া, লজিক ব্যবহার করে এই দুটি অবজেক্টের তথ্য মিলিয়ে একটি নতুন 'ফাইনাল অবজেক্ট' তৈরি করুন।
 */

const studentPersonalDetails = {
  name: "Shahed",
  age: 17,
};

const stuedntAcademicData = {
  class: "1st Semester",
  roll: 331558,
};

const finalObj = { ...studentPersonalDetails, ...stuedntAcademicData };
console.log(finalObj);
