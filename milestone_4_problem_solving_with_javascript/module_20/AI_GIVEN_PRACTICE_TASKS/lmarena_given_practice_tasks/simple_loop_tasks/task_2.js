/**
 * ২. নামতার টেবিল (Multiplication Table)
 *
 * যেকোনো একটি নির্দিষ্ট সংখ্যার (যেমন: ৫) নামতার টেবিল বা Multiplication Table তৈরি করো। আউটপুটটা দেখতে অনেকটা এরকম হবে:
 * 5 x 1 = 5
 * 5 x 2 = 10 ... ইত্যাদি।
 */

let namta = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${namta} x ${i} = ${namta * i}`);
}
