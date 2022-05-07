const palindromes = function (str) {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const spaces = /\s+/g;
  const newStr = str.replace(regex, "").replace(spaces, "").toLowerCase();
  const pal = [...str]
    .reverse()
    .join("")
    .replace(regex, "")
    .replace(spaces, "")
    .toLowerCase();
  return newStr === pal;
  //   console.log(newStr);
  //   console.log(pal);
};

// console.log(palindromes("racecar"));
// console.log(palindromes("racecar!"));
// console.log(palindromes("Racecar!"));
// console.log(palindromes("A car, a man, a maraca."));
// console.log(palindromes("Animal loots foliated detail of stool lamina."));
// console.log(palindromes("ZZZZ car, a man, a maracaz."));

// Do not edit below this line
module.exports = palindromes;
