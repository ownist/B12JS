/**
 * ২. জ্বালানি খরচ হিসাব (Fuel Efficiency: MPG to Kmpl)
 *
 * আমেরিকার গাড়িতে মাইলেজ হিসাব করা হয় MPG (Miles Per Gallon) এ, কিন্তু আমাদের দেশে আমরা ব্যবহার করি Kmpl (Kilometer Per Liter)।
 *
 * একটি ফাংশন লিখুন যা ইনপুট হিসেবে MPG ভ্যালু নেবে।
 * সেটিকে Kmpl এ কনভার্ট করে রিটার্ন করবে।
 * (কনভার্শন ফ্যাক্টর: 1 MPG = 0.425144 Kmpl)
 */

function convertMpgToKmpl(mpg) {
  return `${mpg} mpg = ${(mpg * 0.425144).toFixed(2)} kmpl.`;
}

const mpgValue = 4;
const kmplValue = convertMpgToKmpl(mpgValue);
console.log(kmplValue);
