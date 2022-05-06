const reverseString = function (str) {
  const reversedStr = str.split("").reverse().join("");

  return reversedStr;
};

console.log(reverseString("hello"));
// Do not edit below this line
module.exports = reverseString;
