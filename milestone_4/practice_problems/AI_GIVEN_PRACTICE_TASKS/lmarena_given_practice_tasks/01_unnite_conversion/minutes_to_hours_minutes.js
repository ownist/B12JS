/**
 * ৪. মুভি ডিউরেশন (Time: Minutes to Hours-Minutes)
 *
 * মুভির দৈর্ঘ্য সাধারণত মিনিটে দেওয়া থাকে (যেমন: ১৩৫ মিনিট)। কিন্তু আমরা দেখতে চাই কত ঘণ্টা কত মিনিট।
 * একটি ফাংশন লিখুন যা ইনপুট হিসেবে মোট মিনিট গ্রহণ করবে।
 * ফাংশনটি রিটার্ন করবে কত ঘণ্টা এবং কত মিনিট। (উদাহরণ: ইনপুট 130 হলে আউটপুট হবে "2 hour 10 minutes").
 */

function convertMinuteToHoursMinute(minutes) {
  const hoursNumber = parseInt(minutes / 60);
  const minuteNumber = minutes % 60;

  const resultText = `${minutes} minute = ${hoursNumber} hrs ${minuteNumber} min`;
  return resultText;
}

const minuteValue = 165;
const hoursMinutesValue = convertMinuteToHoursMinute(minuteValue);
console.log(hoursMinutesValue);
