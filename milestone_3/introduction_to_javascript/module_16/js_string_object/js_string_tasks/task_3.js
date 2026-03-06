/**
 * আপনাকে পরীক্ষা করে দেখতে হবে যে একটি নির্দিষ্ট স্ট্রিংয়ের মধ্যে সবকটি ভাওয়েল (vowels) অর্থাৎ a, e, i, o, u আছে কি না।
 */

let str = "Education";
// console.log(str);

const lowerStr = str.toLowerCase();
if (
  lowerStr.includes("a") &&
  lowerStr.includes("e") &&
  lowerStr.includes("i") &&
  lowerStr.includes("o") &&
  lowerStr.includes("u")
) {
  console.log("yup.. all vowels ache");
} else {
  console.log("nope.. all vowels nai");
}
