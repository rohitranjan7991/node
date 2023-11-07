const getDb = require("../util/database").getDb;

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    return db
      .collection("products")
      .insertOne(this)
      .then((result) => {
        console.log("result: ", result);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  static fetchAllProducts() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((result) => {
        console.log("result: ", result);
        return result;
      })
      .catch((err) => {
        console.log("err: ", err);
        throw err;
      });
  }
}

module.exports = Product;
