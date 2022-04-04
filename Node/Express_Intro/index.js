const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/dogs", (req, res) => {
  res.send("Woof!");
});

app.post("/dogs", (req, res) => {
  res.send("Post request");
});

app.get("/cows", (req, res) => {
  res.send("Moo");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Currently browsing the ${subreddit} subreddit </h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Currently viewing Post ID: ${postId} on the ${subreddit} subreddit </h1>`);
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send(`Nothing found if nothing search`);
  }
  res.send(`Seach result for ${q}`);
  console.log(req.query); // Printing the object to see if it is being updated
});

app.get("*", (req, res) => {
  res.send("Incorrect Path");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
