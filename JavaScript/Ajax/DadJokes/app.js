const joke = document.querySelector("#jokes");
const btn = document.querySelector("button");

const dadJokes = async () => {
  try {
    const header = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com", header);
    // console.log(res.data.joke);
    return res.data.joke;
  } catch (error) {
    return "No jokes are avalible at this moment";
  }
};

const addJoke = async () => {
  const jokeText = await dadJokes();
  const newLi = document.createElement("li");
  newLi.append(jokeText);
  joke.append(newLi);
};

btn.addEventListener("click", addJoke);
