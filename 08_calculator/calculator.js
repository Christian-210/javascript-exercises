const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  // let total = 0;

  let total = arr.reduce((curr, acc) => {
    return curr + acc;
  }, 0);

  return total;
};

const multiply = function (arr) {
  let product = arr.reduce((curr, acc) => {
    return curr * acc;
  });

  return product;
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (num) {
  let factorial = 1;

  for (let i = num; i >= 1; i--) {
    factorial *= num;
    num--;
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
