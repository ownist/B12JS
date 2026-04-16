function numbers(n1, n2) {
  console.log(n1, n2);
  console.log(arguments);
  console.log(arguments[4]);
}

numbers(25, 1, 4, 8, 9);
