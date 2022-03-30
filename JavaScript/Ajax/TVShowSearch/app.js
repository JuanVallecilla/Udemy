// const form = document.getElementById("searchForm");
const container = document.getElementById("container");
const input = document.querySelector("input");

input.addEventListener("input", async function (e) {
  e.preventDefault();
  deleteImg();
  const searchInput = input.value;
  const config = { params: { q: searchInput } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  displayImg(res.data);
  console.log(res.data);
  //   form.elements.query.value = "";
});

const displayImg = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      const summary = document.createElement("p");
      // summary.innerText = result.show.summary;
      img.src = result.show.image.medium;
      summary.innerText = result.show.summary;
      container.appendChild(img);
      img.appendChild(summary);
      console.log(summary);
    }
  }
};

const deleteImg = () => {
  const imgs = document.querySelectorAll("img");
  for (const img of imgs) {
    img.remove();
  }
};

// container.addEventListener("mouseover", function (e) {
//   const image = document.querySelector("img");
//   image.src = "image.png";
// });
