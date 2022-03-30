// const form = document.getElementById("searchForm");
const container = document.querySelector(".container");
const input = document.querySelector("#search__input");
// const allDiv = document.querySelector(".tvshowCard");
// const div = document.querySelectorAll("div");

input.addEventListener("input", async function (e) {
  e.preventDefault();
  removeEmptyDivs();
  deleteImg();
  deleteSummary();
  const searchInput = this.value;
  const config = { params: { q: searchInput } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  displayImg(res.data);
  console.log(res.data);
});

const displayImg = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const tvCard = document.createElement("div");
      tvCard.classList.add("tvCard");
      const frontFace = document.createElement("div");
      frontFace.classList.add("frontFace");
      const backFace = document.createElement("div");
      backFace.classList.add("backFace");
      const showImg = document.createElement("img");
      showImg.src = result.show.image.medium;
      const summary = document.createElement("p");
      summary.innerHTML = result.show.summary;
      frontFace.appendChild(showImg);
      container.appendChild(frontFace);
      tvCard.appendChild(frontFace);
      tvCard.appendChild(backFace);
      backFace.appendChild(summary);
      container.appendChild(tvCard);
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
