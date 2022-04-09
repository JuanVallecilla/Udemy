const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO ERROR!!!!");
    console.log(err);
  });

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
});

personSchema.virtual("fullName").get(function () {
  return `${this.first} ${this.last}`;
});

// Pre middleware functions are executed one after another, when each middleware calls next.
personSchema.pre("save", async function () {
  this.first = "YO";
  this.last = "MAMA";
  console.log("About to save");
});
// Post middleware are executed after the hooked method and all of its pre middleware have completed.
personSchema.post("save", async function () {
  console.log("Just saved");
});

const Person = mongoose.model("Person", personSchema);
