// Important array methods:
//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array

//unshift(val) - adds value to START of an array
//shift() - removes and returns first element in an array

/******************************************************************/

//Lotto Number Exercise
//Define a Variable called lottoNumbers and
//set it to an array containing any 6 numbers

let lottoNumbers = [1, 2, 3, 4, 5, 6];
//console.log(typeof lottoNumbers.indexOf(0));
//console.log(typeof lottoNumbers[1]);
//console.log(lottoNumbers[1]);

/******************************************************************/

//Modifying Arrays

let colors = ["red", "blue", "graen"];
colors[2] = "green";
//console.log(colors[2]);

/******************************************************************/

//Array Access Exercise
const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"];
leaderboard[1] = "Luna";
leaderboard[3] = "Draco";

/******************************************************************/

//Array Push(add to end) % Pop(remove from end)
const movieLine = ["Harry", "Lua", "Hermione", "Bellatrix"];
movieLine.push("Draco");
//Sconsole.log(movieLine);
movieLine.pop();
//console.log(movieLine);

/******************************************************************/

//Array Shift(remove from start) & Unshift(add to start)
const line = ["Harry", "Lua", "Hermione", "Bellatrix"];
line.shift();
//console.log(line);
line.unshift("Not Harry");
//console.log(line);

/******************************************************************/

//Push/Pop/Shift/Unshift Exercise
const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!
planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");

/******************************************************************/

//Concat, indexOf,Includes & Reverse
let dogs = ["Coco", "Astro"];
let cats = ["kitty"];
let combination = dogs.concat(cats);
//console.log(combination); // Will combine both dogs & cats arrays
//console.log(dogs.includes("Milo")); // Will print false since Milo does not exist in the array
//console.log(combination.indexOf("Astro")); // Will get 1 since Astro exist
//console.log(combination.reverse()); // Will reverse the original string of combination

/******************************************************************/

//Slice(Copies portion of an array) , Splice(removes/replaces elemets) NOTE: Splice only accepts 1 index reference
let colores = ["red", "orange", "yellow", "green"];
//colores.slice(); // This will make a copy of colores
//console.log(colores.slice(3)); // This will give the colores from index 3 to the end of array
//console.log(colores.slice(1, 3)); // This will give the colores from index 1 to 3 (not including it)
//console.log(colores.splice(2, 1)); // Will delete 1 things starting at index 2
//console.log(colores.splice(1, 2, "blue")); //Will replace at index of 1 with "blue" and will delete 2 starting from index 1
//console.log(colores);

/******************************************************************/

//Multi-Dimensional Array
const gameBoard = [
  ["X", "O", "X"],
  ["O", "null", "X"],
  ["O", "O", "X"],
];

//console.log(gameBoard[1][1]); // This is how we access null from out gameboard
//console.log(gameBoard);

/******************************************************************/

//Nested arrays exercise
const airplaneSeats = [
  ["Ruth", "Anthony", "Stevie"],
  ["Amelia", "Pedro", "Maya"],
  ["Xavier", "Ananya", "Luis"],
  ["Luke", null, "Deniz"],
  ["Rin", "Sakura", "Francisco"],
];

//airplaneSeats[3][1] = "Hugo"; // Solution #1
//console.log(airplaneSeats[3].splice(1, 1, "Hugo")); // Solution #2
console.log(airplaneSeats);
