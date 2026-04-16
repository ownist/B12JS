function multiply(n1, n2) {
  // validate
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return "plz provide a number";
  }

  // valid data
  return n1 * n2;
}

const mult = multiply(5, 3);
console.log(mult);

function fullName(first, last) {
  if (typeof first !== "string") {
    return "First name should be a string";
  } else if (typeof last !== "string") {
    return "Last name should be a string";
  }

  return `${first} ${last}`;
}

const full = fullName("shahed");
console.log(full);

// validate an object
function obj(o) {
  if (typeof o !== "object") {
    return "plz provide an object";
  }

  return o.price;
}

// const object = obj({ name: "banana", price: 30 });
const object = obj("shahed");
console.log(object);

// validate an array
function arr(a) {
  if (Array.isArray(a) === false) {
    return "plz provide an array";
  }

  return a[1];
}

// const array = arr([1, 5]);
const array = arr(1);
console.log(array);
