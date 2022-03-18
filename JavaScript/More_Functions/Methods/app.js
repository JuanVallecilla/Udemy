const myMath = {
  PI: 3.14159,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};
myMath.square;

const cat = {
  name: "Blue Steele",
  color: "grey",
  breed: "scottish fold",
  meow() {
    console.log("THIS IS:", this);
    //console.log(`${this.name} says MEOWWWW`);
  },
};
//console.log(cat.meow());
//const meow2 = cat.meow;

/******************************************************************/
//Coding Exercise 45: Methods Exercise
const square = {
  area(side) {
    return side * side;
  },
  perimeter(side) {
    return side * 4;
  },
};

// console.log(square.area(10));
// console.log(square.perimeter(10));

/******************************************************************/
// Coding Exercise 46: Egg Laying Exercise
const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    // const str = "EGG";
    this.eggCount++;
    return "EGG";
  },
};

console.log(hen.name);
console.log(hen.eggCount);
console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
console.log(hen.eggCount);
