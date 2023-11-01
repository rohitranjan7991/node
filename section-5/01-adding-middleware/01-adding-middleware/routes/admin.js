const express = require("express");
const router = express.Router();
const path = require("path");

const rootDir = require("../utils/path");

router.get("/add-product", (req, res, next) => {
  //   console.log("inside a middleware");
  // res.send(
  //   "<form action='/admin/product' method='POST'><input type='text' name='name'><button type='submit'>Add Product</button></form>"
  // );
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  next(); //allows req to navigate to next middleware.s
});

router.post("/product", (req, res) => {
  console.log("req.body: ", req.body);
  res.redirect("/");
});

module.exports = router;
