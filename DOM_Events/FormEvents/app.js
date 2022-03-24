const form = document.querySelector("#doglist");
const list = document.querySelector("#listDog");
console.dir(form);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputName = form.elements.username;
  const inputBreed = form.elements.breed;
  //   console.dir(inputName);
  //   console.log(inputBreed);
  addList(inputName.value, inputBreed.value);
  inputName.value = "";
  inputBreed.value = "";
});

function addList(username, breed) {
  const newList = document.createElement("li");
  newList.append(`Dog's Name: ${username}`);
  newList.append(` - Dog's Breed: ${breed}`);
  list.append(newList);
  console.log(newList);
}
