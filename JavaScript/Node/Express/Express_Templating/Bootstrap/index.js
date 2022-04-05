const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

// Serving static files in Express (in subreddit template)
app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { num: num });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("notFound", { subreddit });
  }
});

app.get("/dogs", (req, res) => {
  const dogs = ["Coco", "Astro", "Scooby"];
  res.render("dogs", { dogs });
});

app.listen(8080, () => {
  console.log("Listening on port 3000");
});
