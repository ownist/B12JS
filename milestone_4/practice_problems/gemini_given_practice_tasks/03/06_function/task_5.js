/**
 * ৫. ভাওয়েল কাউন্টার (Vowel Counter)
 *
 * একটি ফাংশন তৈরি করুন যা একটি বাক্য বা স্ট্রিং (String) ইনপুট হিসেবে নেবে। ফাংশনটি গণনা করে বলবে ওই বাক্যে মোট কতটি ভাওয়েল (a, e, i, o, u) আছে এবং সেই সংখ্যাটি রিটার্ন করবে।
 */

function checkVowel(str) {
  let totalVowel = [];

  for (const letter of str.toLowerCase()) {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      totalVowel.push(letter);
    }
  }
  // return total vowel
  return totalVowel.length;
}
const sentence = "amr soner bangla ami tomake valobashi";
const result = checkVowel(sentence);
console.log(`total vowel: ${result}`);
