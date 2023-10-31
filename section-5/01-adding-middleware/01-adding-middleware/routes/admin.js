const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  //   console.log("inside a middleware");
  res.send(
    "<form action='/admin/product' method='POST'><input type='text' name='name'><button type='submit'>Add Product</button></form>"
  );
  //   next(); //allows req to navigate to next middleware.
});

router.post("/product", (req, res) => {
  console.log("req.body: ", req.body);
  res.redirect("/");
});

module.exports = router;
