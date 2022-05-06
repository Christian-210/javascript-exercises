const ftoc = function (temp) {
  let tempC = (temp - 32) * (5 / 9);

  if (!Number.isInteger(tempC)) {
    return Number(tempC.toFixed(1));
  }

  return tempC;
};

const ctof = function (temp) {
  let tempF = temp * (9 / 5) + 32;

  if (!Number.isInteger(tempF)) {
    return Number(tempF.toFixed(1));
  }

  return tempF;
};

// console.log(ftoc(32));
// console.log(ftoc(100));
// console.log(ftoc(-100));
// console.log(ctof(0));
// console.log(ctof(73.2));
// console.log(ctof(-10));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
