// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("form");
const list = document.querySelector("#list");

// const product = document.querySelector("#product");
// const quantity = document.querySelector("#qty");

// const list = document.querySelector("#list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const product = form.elements.product;
  const qty = form.elements.qty;
  // const newList = document.createElement("li");
  // newList.innerHTML = `${quantity.value} ${product.value}`;
  // list.appendChild(newList);
  add(product.value, qty.value);
  quantity.value = "";
  product.value = "";
});

function add(product, qty) {
  const newList = document.createElement("li");
  newList.innerText = `${qty} ${product}`;
  list.appendChild(newList);
}
