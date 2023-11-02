const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const relPath = require("./utils/path");
const homeRoute = require("./routes/homeRoute");
const userROutes = require("./routes/userRoute");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(homeRoute);
app.use(userROutes);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "./", "views", "404Page.html"));
});

app.listen(3001);
