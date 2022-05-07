const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

// const getTheTitles = books.map((book) => book.title);

// const getTheTitles = function (arr) {
//   const bookTitles = [];
//   for (let i = 0; i < arr.length; i++) {
//     bookTitles.push(arr[i].title);
//   }

//   return bookTitles;
// };

const getTheTitles = function (arr) {
  return arr.map((book) => book.title);
};

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
