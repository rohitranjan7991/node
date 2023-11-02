const express = require("express");

const route = express.Router();

route.get("/", (req, res, next) => {
  res.send("<h1>Home Page</h1>");
  next();
});

module.exports = route;
