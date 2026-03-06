/**
 * Task-4: Count Vowels Individually
 *
 * একটি স্ট্রিংয়ে কয়টি ভাওয়েল (a, e, i, o, u) আছে তা আপনাকে গুনতে হবে।
 *
 * তবে এখানে একটি টুইস্ট আছে —
 * আপনাকে প্রতিটি ভাওয়েল আলাদা আলাদাভাবে কয়টি আছে সেটি দেখাতে হবে।
 *
 * আউটপুট ফরম্যাট হতে পারে অনেকটা এরকম: a: 2, e: 1, i: 3, o: 0, u: 1
 */

let str = "Deep learning is a subset of machine learning";

// every single vowels array
let a = [];
let e = [];
let i = [];
let o = [];
let u = [];

for (let index = 0; index < str.length; index++) {
  let strLetterFromLoop = str[index].toLowerCase();

  if (strLetterFromLoop === "a") {
    a.push(strLetterFromLoop);
  } else if (strLetterFromLoop === "e") {
    e.push(strLetterFromLoop);
  } else if (strLetterFromLoop === "i") {
    i.push(strLetterFromLoop);
  } else if (strLetterFromLoop === "o") {
    o.push(strLetterFromLoop);
  } else if (strLetterFromLoop === "u") {
    u.push(strLetterFromLoop);
  }
}

console.log(
  `a: ${a.length}, e: ${e.length}, i: ${i.length}, o: ${o.length}, u: ${u.length}`
);
