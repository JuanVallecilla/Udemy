const express = require("express");
const app = express();
const path = require("path");

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }));
// for parsing application/json
app.use(express.json());
// Views folder and EJS setup:
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const comments = [
  {
    id: 1,
    username: "Todd",
    comment: "Lol you are so funny!",
  },
  {
    id: 2,
    username: "Mike",
    comment: "I have a dog and a cat",
  },
  {
    id: 3,
    username: "Jhon",
    comment: "I dont have a dog or a cat but I have a bird!",
  },
  {
    id: 4,
    username: "Juan",
    comment: "My favorite game is league of legends",
  },
];

// **********************************
// INDEX - renders multiple comments
// **********************************

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

// **********************************
// NEW - renders a form
// **********************************

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

// **********************************
// CREATE - creates a new comment
// **********************************

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.redirect("/comments");
});

// *******************************************
// SHOW - details about one particular comment
// *******************************************

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === parseInt(id));
  res.render("comments/show", { comment });
});

app.get("/tacos", (req, res) => {
  res.send("Get /tacos response");
});

app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`Ok, here are your ${qty} ${meat} tacos`);
  console.log(req.body);
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

// GET /comments - list all comments
// POST /comments - Create a new comment
// GET /comments/:id - Get one comment (using ID)
// PUT/PATCH /comments/:id - Update one comment
// DELETE /comments/:id - Destroy one comment
