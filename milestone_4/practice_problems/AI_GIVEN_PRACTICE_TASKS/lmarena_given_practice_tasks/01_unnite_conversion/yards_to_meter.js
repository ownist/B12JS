/**
 * ৩. ক্রিকেট পিচ কনভার্টার (Yards to Meters)
 *
 * ক্রিকেট পিচের দৈর্ঘ্য ২২ গজ (Yards)। কিন্তু ইঞ্জিনিয়ারিং বা স্টেডিয়াম তৈরির সময় মিটারে মাপতে হয়।
 *
 * একটি ফাংশন তৈরি করুন যা ইনপুট হিসেবে গজ (Yard) নেবে।
 * সেটিকে মিটারে (Meter) কনভার্ট করে রিটার্ন করবে।
 * (সূত্র: ১ গজ = ০.৯১৪৪ মিটার)
 */

function convertYardsToMeter(yard) {
  return `${yard} yard = ${(yard * 0.9144).toFixed(2)} meter.`;
}

const yardValue = 22;
const meterValue = convertYardsToMeter(yardValue);
console.log(meterValue);
