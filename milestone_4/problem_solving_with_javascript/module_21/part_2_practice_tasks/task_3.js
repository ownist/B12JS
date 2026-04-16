function calculateElectronicsBudget(
  laptopQuantity,
  tabletsQuantity,
  mobileQuantity,
) {
  const laptop = 35000;
  const tablet = 15000;
  const mobile = 20000;

  const laptopCost = laptop * laptopQuantity;
  const tabletsCost = tablet * tabletsQuantity;
  const mobileCost = mobile * mobileQuantity;
  const total = laptopCost + tabletsCost + mobileCost;

  return total;
}

const totalBudget = calculateElectronicsBudget(1, 2, 1);
console.log(totalBudget);
