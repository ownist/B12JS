function evenSizedString(str) {
  if (str.length % 2 === 0) {
    return true;
  }
  // otherwise false
  return false;
}
console.log(evenSizedString("Shahed"));

/**
 * do double ot tripple
 */
function doDoubleOtTripple(num, double) {
  if (double) {
    const result = num * 2;
    return result;
  } else {
    const result = num * 3;
    return result;
  }
}
console.log(doDoubleOtTripple(5, true));
console.log(doDoubleOtTripple(2, false));

/**
 * ami chaile function er parameter hisebe ekta array kew dite pari
 */
function numberOfElements(elem) {
  return elem.length;
}
console.log(numberOfElements([2, 5, 4, 6, 9]));

/** functon ermodde ami ekta object o dite pari */
function findAge(person) {
  return person.age;
}
console.log(findAge({ age: 17 }));
