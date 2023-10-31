const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  //   console.log("inside another middleware");
  res.send("<h1>Hello EXPRESS</h1>");
  //   next()
});
module.exports = router;
