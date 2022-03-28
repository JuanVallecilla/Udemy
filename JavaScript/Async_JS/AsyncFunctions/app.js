// Declaring a function as async automatically returns a promise.
async function hello() {}

// async declaration with arrow functions
// const sing = async () => {
// Rejecting a Promise by throwing an error (Eg. using throw)
//   throw new Error("Oppsi");
//   return "Do Re Mi";
// };

// sing()
//   .then((data) => {
//     console.log("Promise resolve with:", data);
//   })
//   .catch((err) => {
//     console.log("Promise Rejected");
//     console.log(err);
//   });

// Making a "dumb real-world" Example
const login = async (username, password) => {
  if (!username || !password) throw "Missing Credentials";
  if (password === "password") return "welcome";
  throw "Invalid Password";
};

login("MadzGod", "password")
  .then((msg) => {
    console.log("You are log In!");
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error");
    console.log(err);
  });

// Using async with await
// const colorChanger = (newColor, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.background = newColor;
//       resolve();
//     }, delay);
//   });
// };

// async function rainbow() {
//   await colorChanger("red", 1000);
//   await colorChanger("orange", 1000);
//   await colorChanger("yellow", 1000);
//   await colorChanger("blue", 1000);
//   await colorChanger("indigo", 1000);
//   await colorChanger("violet", 1000);
//   return "Done";
// }
// // rainbow().then(() => console.log("Taste The Rainbow"));
// async function printRainbow() {
//   await rainbow();
//   console.log("You reached the end of the rainbow");
// }

// printRainbow();

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

// Also handling errors with Async Functions
async function makeTwoResquests() {
  try {
    // we can store await into a variable
    let data1 = await fakeRequest("/page1");
    console.log(data1);
    let data2 = await fakeRequest("/page2");
    console.log(data2);
  } catch (e) {
    console.log("Error Caught:", e);
  }
}
