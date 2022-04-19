const express = require("express");
const app = express();
const shelterRoutes = require("./routes/shelters");
const dogRoutes = require("./routes/dogs");
const adminRoutes = require("./routes/admin");
// by setting /shelters or /dogs we set the initial pattern and we do not have to do that for every route in shelters.js this allows us to change /prefix to something else and dont have to worry about shelters.js
app.use("/shelters", shelterRoutes);
app.use("/dogs", dogRoutes);
app.use("/admin", adminRoutes);

app.listen(3000, () => {
  console.log("Serving app on localhost:3000");
});
