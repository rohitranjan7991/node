const express = require("express");
const path = require("path");
const route = express.Router();

route.get("/users", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "user.html"));
  //   res.sendFile(path.join(__dirname, "../", "views", "user.html"));
  next();
});

module.exports = route;
