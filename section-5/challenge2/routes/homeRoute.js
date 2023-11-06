const express = require("express");
const path = require("path");
const route = express.Router();

route.get("/", (req, res, next) => {
  console.log("home");
  res.sendFile(path.join(__dirname, "..", "views", "home.html"));
  // next();
});

module.exports = route;
