const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));

//Need to include next(); or it will not continue to run
app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

// Setting another middleware that only runs on incoming request with the path /dogs
app.use("/dogs", (req, res, next) => {
  console.log("I LOVE DOGS!!");
  next();
});

// Dumb example of requiring a password (NOTE: Never do this with query string)
const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "chickennugget") {
    next();
  }
  res.send("YOU NEED A PASSWORD!");
};

// app.use((req, res, next) => {
//     console.log("THIS IS MY FIRST MIDDLEWARE!!!")
//     return next();
//     console.log("THIS IS MY FIRST MIDDLEWARE - AFTER CALLING NEXT()")
// })
// app.use((req, res, next) => {
//     console.log("THIS IS MY SECOND MIDDLEWARE!!!")
//     return next();
// })
// app.use((req, res, next) => {
//     console.log("THIS IS MY THIRD MIDDLEWARE!!!")
//     return next();
// })

app.get("/", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send("HOME PAGE!");
});

app.get("/dogs", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send("WOOF WOOF!");
});

// We can pass verifyPassword(middleware we define) in app.get
app.get("/secret", verifyPassword, (req, res) => {
  res.send("MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone");
});

// Another use case for app.use: If nothing else was match we send a 404 status.
app.use((req, res) => {
  res.status(404).send("NOT FOUND!");
});

app.listen(3000, () => {
  console.log("App is running on localhost:3000");
});
