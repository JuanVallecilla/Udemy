const allImages = document.getElementsByTagName("img");

for (let img of allImages) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg";
}

const squareImg = document.getElementsByClassName("square");

for (let img of squareImg) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

const links = document.querySelectorAll(".square");

for (let link of links) {
  console.log("link.href");
}
