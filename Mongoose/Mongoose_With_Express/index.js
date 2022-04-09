const express = require("express");
const app = express();
const path = require("path");
// https://mongoosejs.com/docs/guide.html
const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/farmStand", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("MONGO OH NO ERROR!!!!");
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/dogs", (req, res) => {
  res.send("WOOF");
});

app.listen(8080, () => {
  console.log("Connected");
});
