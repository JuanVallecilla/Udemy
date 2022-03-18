//Logical AND (&&)

// const password = prompt("Enter your space");

// if (password.length >= 6 && password.indexOf(" ") == -1) {
//   console.log("Valid Passowrd!");
// } else {
//   console.log("Invalid Format!");
// }

// Logical OR (||)

// 0-5 FREE
// 5-10 $10
// 10-65 $20
// 65+ FREE

// const age = 100;

// if ((age >= 0 && age < 5) || age >= 65) {
//   console.log("FREE");
// } else if (age >= 5 && age < 10) {
//   console.log("$10");
// } else if (age >= 10 && age < 65) {
//   console.log("$20");
// }

// Logical NOT (!)

// const firstName = prompt("Enter your first name");
// if (!firstName) {
//   const firstName = prompt("Try again");
// }

// const age = 45;
// if (!((age >= 0 && age < 5) || age >= 65)) {
//   console.log("You are not below 5 years old or above 65 years old");
// }

const day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("invalid #");
}
