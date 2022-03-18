// To make an object literal:
const dog = {
  name: "Rusty",
  breed: "unknown",
  isAlive: false,
  age: 7,
};

//console.log(dog.age);

/******************************************************************/

//Object Exercise
const product = {
  name: "Gummy Bears",
  inStock: true,
  price: 1.99,
  flavors: ["grape", "apple", "cherry"],
};

//let birthyear = 2020;
//console.log(product.birthyear);
//console.log(product[birthyear]);

/******************************************************************/

//When to use dot notation vs bracket notation []
const product2 = {
  name: "Gummy Bears",
  inStock: true,
  price: 1.99,
  flavors: ["grape", "apple", "cherry"],
  2020: "Test",
};

//let birthyear = 2020;
//console.log(product.birthyear);
//console.log(product[birthyear]);

/******************************************************************/

//Object Access Exercise
const restaurant = {
  name: "Ichiran Ramen",
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: "Brooklyn",
  state: "NY",
  zipcode: "11206",
};

//let fullAddress = restaurant.address + " " + restaurant.city + " " + restaurant.state + " " + restaurant.zipcode;

//Using Template Literals
//let fullAddress = `${restaurant.address}` + `${restaurant.city}` + `${restaurant.state}` + `${restaurant.zipcode}`;
//console.log(fullAddress);

/******************************************************************/

//Modifying Objects
const midterms = {
  Moe: 96,
  Tom: 78,
};
//console.log(midterms);
let change = "Tom";
midterms.Tom = 79;
//console.log(midterms[change]);
midterms["Moe"] = "A+";
//console.log(midterms["Moe"]);
midterms.Juan = "B+";
//console.log(midterms.Juan);
//console.log(midterms);

/******************************************************************/

//Nested Arrays & Objects
const comments = [
  { username: "MadzGod", text: "League", votes: 10 },
  { username: "FatKoreanBoy", text: "LoL", votes: 1 },
];

console.log(comments[1].username);
