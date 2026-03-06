/**
 * আপনাকে একটি স্ট্রিংয়ের ভেতর 'x' অথবা 'X' অক্ষরটি খুঁজতে হবে
 *
 * যদি স্ট্রিংটিতে ছোট হাতের 'x' থাকে, তবে সেটিকে 'y' দিয়ে পরিবর্তন (replace) করতে হবে
 *
 * আর যদি বড় হাতের 'X' থাকে, তবে সেটিকে বড় হাতের 'Y' দিয়ে পরিবর্তন করতে হবে।
 */

let str = "Extreme sports are exciting, but X-ray machines are expensive.";

let result = str.replaceAll("X", "Y").replaceAll("x", "y");
console.log(result);
