// learning to use Fetch Note: fetch returns a promise
//
//   .then((res) => {
//     console.log("Resolve", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

// Making a second request right after Example
// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("First request resolve", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/");
//   })
//   .then((res) => {
//     console.log("Second request resolved");
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });

// Using async function
const starWarsCharacters = async (id) => {
  try {
    const res = await fetch(`https://swapi.dev/api/people/${id}/`);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
};

starWarsCharacters(1);
