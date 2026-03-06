/**
 * vat khawar funtion
 */
function vatKhaw() {
  console.log("hat dhuye naw");
  console.log("khabar table e aso");
  console.log("plate naw");
  console.log("vat naw");
  console.log("torkari naw");
  console.log("khawa suru koro");
}
// vat khawar funtion ke call kora hocche
// vatKhaw();

/**
 * parameter
 */
function square(num) {
  /**
   * borgo ber korar logic
   */
  const borgo = num * num;
  console.log(`${num} er borgo holo: ${borgo}`);

  // break
  console.log("------------------- break ------------------");
}
square(4);
square(12);
square(405);

/**
 * add function. jog korar funtion
 */
function add(x, y) {
  const result = x + y;
  console.log(`total sum of numbers are ${x} + ${y} = ${result}`);
}
// call add function
add(50, 10);
add(5, 45);
add(56, 258);
