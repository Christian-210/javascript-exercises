const fibonacci = function (num) {
  const fibSequence = [];
  let num1 = 0;
  let num2 = 1;
  let newTotal = 0;
  // let incrementor = 1;

  if (num < 0) {
    return "OOPS";
  }

  for (let i = 0; i < num; i++) {
    // num2 = num1 + num2;
    // num1 = num2;
    // fibSequence.push(num2);

    if (newTotal < 2) {
      fibSequence.push(num1 + num2);
      newTotal++;
    } else {
      num1 = num2;
      num2 = newTotal;
      fibSequence.push(num2);
      newTotal += num1;
    }
  }

  return fibSequence[fibSequence.length - 1];
};

// console.log(fibonacci(4));
// console.log(fibonacci(6));
// console.log(fibonacci(10));
// console.log(fibonacci(15));
// console.log(fibonacci(25));
// console.log(fibonacci(-25));
// console.log(fibonacci("1"));
// console.log(fibonacci("2"));
// console.log(fibonacci("8"));

// Do not edit below this line
module.exports = fibonacci;
