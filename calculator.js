
var bill_amount = prompt('How much is the bill?');

var tip = prompt('What is the tip Percentage');

function tip_amount(bill_amount,tip) {
  return bill_amount * tip
};

console.log(tip_amount);

function total_with_grat(bill_amount,tip_amount) {
    return bill_amount + tip_amount
};

console.log(total_with_grat);
