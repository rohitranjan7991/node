const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   console.log("inside fist middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("inside second middleware");
//   // next()
// });

app.use("/users", (req, res, next) => {
  res.send("<h1>From Users Page</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h2>HOME PAGE</h2>");
});

app.listen(3001);
