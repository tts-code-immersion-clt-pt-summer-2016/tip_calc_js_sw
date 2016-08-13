var bill_amount = parseFloat(prompt('How much is the bill?'));

var tip =  parseFloat(prompt('What is the tip Percentage'));

alert('Your total amount is' + ((bill_amount*tip) + bill_amount));
