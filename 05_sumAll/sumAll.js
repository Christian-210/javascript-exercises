const sumAll = function (num1, num2) {
  let sum = 0;

  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number"
  ) {
    return "ERROR";
  } else if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      sum += num1;
      num1++;
    }
  } else {
    for (let i = num1; i >= num2; i--) {
      sum += num1;
      num1--;
    }
  }

  return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
