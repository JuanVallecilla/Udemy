// Creating our own Promises

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if (rand < 0.7) {
//         resolve("Data is here");
//       }
//       reject("Request rejected");
//     }, 1000);
//   });
// };

// fakeRequest("/dogs/1")
//   .then((data) => {
//     console.log("Done with request");
//     console.log("Data...:", data);
//   })
//   .catch((err) => {
//     console.log("Opps...", err);
//   });

const colorChanger = (newColor, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.background = newColor;
      resolve();
    }, delay);
  });
};

colorChanger("red", 1000)
  //Implicit return syntax

  .then(() => colorChanger("orange", 1000))
  .then(() => colorChanger("yellow", 1000))
  .then(() => colorChanger("blue", 1000))
  .then(() => colorChanger("indigo", 1000))
  .then(() => colorChanger("violet", 1000));
