// Coding Exercise 47: Map Practice
// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];

const firstNames = fullNames.map(function (names) {
  return names.first;
});
// console.log(firstNames);

/******************************************************************/

// Coding Exercise 48: Arrow Function Exercise
const greet = (name) => {
  return `Hey ${name}!`;
};

// console.log(greet("Hagrid"));

/******************************************************************/
// Coding Exercise 49: Filter Exercise
// function validUserNames(usernames) {
//   return usernames.filter((names) => names.length < 10);
// }
const usernames = [
  "sewing",
  "craftwork",
  "reading",
  "gaming",
  "darts",
  "kyaking",
  "stamp collecting",
  "modeling",
  "painting",
];

function validUserNames(usernames) {
  const newArray = usernames.filter(function (names) {
    return names.length < 10;
  });
  return newArray;
}

// Using arrow Function
// const validUserNames = (usernames) => {
//   const newArray = usernames.filter((names) => {
//     return names.length < 10;
//   });
//   return newArray;
// };
// console.log(validUserNames(usernames));

// Implicit return
// const validUserNames = (usernames) =>
//   usernames.filter((names) => names.length < 10);
// const validUserNames = strArr =>  strArr.filter(names => names.length < 10);

//console.log(validUserNames(usernames));

//DEBUDING FOR EXERCISE 49
/******************************************************************/

// console.log(
//   usernames.filter((names) => {
//     return names.length < 1;
//   })
// );

/******************************************************************/
// Coding Exercise 50: Some/Every Exercise
const even = [2, 4, 6, 8];
// Using Arrow Function
// const allEvens = (array) => {
//   const solution = array.every((num) => num % 2 === 0);
//   return solution;
// };
//console.log(allEvens(even));

// Using implicit return
// const allEvens = (array) => array.every((num) => num % 2 === 0);
// console.log(allEvens(even));

// Normal Solution
function allEvens(array) {
  const solution = array.every(function (num) {
    return num % 2 === 0;
  });
  return solution;
}
console.log(allEvens(even));
