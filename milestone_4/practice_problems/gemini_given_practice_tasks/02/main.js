/**
 * level easy
 */
function addOrSubtract(num1, num2, isAdd) {
  if (isAdd) {
    return num1 + num2;
  }
  // otherwise return will be false
  return num1 - num2;
}

console.log(addOrSubtract(10, 5, false));

/**
 * level medium
 */
function getGrade(marks) {
  if (marks < 0 || marks > 100) {
    return "Invalid Marks";
  }

  // main checking
  if (marks >= 80) {
    return "A+";
  } else if (marks > 70 && marks < 79) {
    return "A";
  } else if (marks > 60 && marks < 69) {
    return "A-";
  } else if (marks > 50 && marks < 59) {
    return "B";
  } else if (marks > 40 && marks < 49) {
    return "C";
  } else {
    return "Fail";
  }
}
// call the function
console.log(getGrade(120));

/**
 * level
 *
 * think carefully
 */
function canBuyChocolate(money, chocolatePrice, isMember) {
  if (isMember) {
    // 10 tk discount
    const discountPrice = chocolatePrice - 10;

    if (money < discountPrice) {
      return "Not enough money";
    } else {
      return "You can buy chocolate and you are a vip member of our shop"; // eikhane eita ektu ala kore dekhacchi cz bujar jonno jei eita member er jnno print hocche
    }
  } else if (money < chocolatePrice) {
    return "Not enough money";
  } else {
    return "You can buy chocolate";
  }
}

const result = canBuyChocolate(30, 60, true);
console.log(result);
