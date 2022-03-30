// const form = document.getElementById("searchForm");
const container = document.querySelector(".container");
const input = document.querySelector("#search__input");
// const allDiv = document.querySelector(".tvshowCard");
// const div = document.querySelectorAll("div");

input.addEventListener("input", async function (e) {
  // if (e.code === "Enter") {
  e.preventDefault();
  // removeChild();
  removeEmptyDivs();
  deleteImg();
  deleteSummary();
  const searchInput = this.value;
  const config = { params: { q: searchInput } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  displayImg(res.data);
  console.log(res.data);
  // }
  // console.log(res.data);
  //   form.elements.query.value = "";
});

// const displayImg = (shows) => {
//   for (let result of shows) {
//     if (result.show.image) {
//       const img = document.createElement("IMG");
//       const summary = document.createElement("p");
//       // summary.innerText = result.show.summary;
//       img.src = result.show.image.medium;
//       summary.innerText = result.show.summary;
//       container.appendChild(img);
//       img.appendChild(summary);
//       console.log(summary);
//     }
//   }
// };

const displayImg = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const tvShow = document.createElement("div");
      tvShow.classList.add("tvshowCard");
      const showImg = document.createElement("img");
      showImg.src = result.show.image.medium;
      // const summary = document.createElement("p");
      // summary.innerHTML = result.show.summary;
      tvShow.appendChild(showImg);
      // tvShow.appendChild(summary);
      container.appendChild(tvShow);
      // form.appendChild(container);
    }
  }
};

const deleteImg = () => {
  const imgs = document.querySelectorAll("img");
  for (const img of imgs) {
    img.remove();
  }
};

const deleteSummary = () => {
  const summary = document.querySelectorAll("p");
  for (const p of summary) {
    p.remove();
  }
};

const removeChild = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

const removeEmptyDivs = () => {
  container.innerHTML = "";
};
// container.addEventListener("mouseover", function (e) {
//   const image = document.querySelector("img");
//   image.src = "image.png";
// });

// div
//      img
//      p
// div
