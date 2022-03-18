// Coding Exercise 35: Heart Function Exercise
// function printHeart() {
//   console.log("<3");
// }

// printHeart();

/************************************************************/

// Coding Exercise 36: Rant Exercise
// function rant(message) {
//   for (let i = 0; i < 3; i++) {
//     console.log(`${message}`.toUpperCase());
//   }
// }
// rant("i hate beets");

/************************************************************/

// Coding Exercise 37: Multiple Args Exercise
// function isSnakeEyes(firstNum, secondNum) {
//   if (firstNum == 1 && secondNum == 1) {
//     console.log("Snake Eyes!");
//   } else {
//     console.log("Not Snake Eyes!");
//   }
// }

/************************************************************/

// Coding Exercise 38: Return Value Practice
// function multiply(a, b) {
//   return a * b;
// }

/************************************************************/

// Coding Exercise 39: isShortWeather Function
// function isShortsWeather(temperature) {
//   if (temperature >= 75) return true;
//   else return false;
// }
/************************************************************/

// Coding Exercise 40: LastElement Exercise
// function lastElement(array) {
//   if (array.length === 0) {
//     return null;
//   } else {
//     return array[array.length - 1];
//   }
// }

/************************************************************/

// Coding Exercise 41: Capitalize Exercise
// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

/************************************************************/

// Coding Exercise 42: Sum Array Exercise
// function sumArray(arrayNum) {
//   let total = 0;
//   for (let i = 0; i < arrayNum.length; i++) {
//     total += arrayNum[i];
//   }
//   return total;
// }

/************************************************************/

// Coding Exercise 43: Day of the Week Exercise
//
const daysofWeek = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};

function returnDay(number) {
  if (number < 1 || number > 7) {
    return null;
  }
  return daysofWeek[number];
}
/************************************************************/

//Using Arrays
// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// function rDays(num) {
//   if (num < 1 || num > 7) return null;
//   return days[num - 1];
// }
