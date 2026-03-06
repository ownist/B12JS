/** add korar function. duita value total koto */
function add(price1, price2) {
  const total = price1 + price2;
  return total;
}

const bill = add(20, 45);
console.log(`package bill: ${bill}tk`);

/**
 * shortcut return
 *
 * return er value ta kono variable na rekhe direct returm kore dewa
 */
function add2(price1, price2) {
  // irect return
  return price1 + price2;
}

// function ke direct call kore dewa hocche console.log er moddhe. kono variable er moddhe na rekhe
console.log(add2(50, 10));

/**
 * do some math er function
 */
function doMath(x, y) {
  const sum = x + y;
  const diff = x - y;
  const mult = sum * diff;
  const divide = mult / 2;

  // return
  return divide;
}
const result = doMath(60, 50);
console.log(result);
