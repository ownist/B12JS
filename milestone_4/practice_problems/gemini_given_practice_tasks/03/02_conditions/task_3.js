/**
 * একটি ভেরিয়েবলে ট্রাফিক লাইটের রং (যেমন: "red", "yellow", অথবা "green") থাকবে। if else স্টেটমেন্ট ব্যবহার করে রং অনুযায়ী মেসেজ দেখান:
 *
 * Red হলে "Danger"
 * Yellow হলে "Stop"
 * Green হলে "Cross the road"
 * ভুল রং দিলে "Invalid Color"
 */

let lightColor = "Green";

if (lightColor.toLowerCase() === "red") {
  console.log("Danger");
} else if (lightColor.toLowerCase() === "yellow") {
  console.log("Stop");
} else if (lightColor.toLowerCase() === "green") {
  console.log("Cross the road");
} else {
  console.log("Invalid Color");
}
