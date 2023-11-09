const getDb = require("../util/database").getDb;
const { ObjectId } = require("mongodb");

class Product {
  constructor(title, price, description, imageUrl, id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.id = new ObjectId(id);
  }

  save() {
    const db = getDb();
    let dbOps;
    if (this.id) {
      // updated
      dbOps = db
        .collection("products")
        .updateOne({ _id: this.id }, { $set: this });
    } else {
      dbOps = db.collection("products").insertOne(this);
    }
    return dbOps
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
        // console.log("result: ", result);
        return result;
      })
      .catch((err) => {
        console.log("err: ", err);
        throw err;
      });
  }

  static findById(prodId) {
    const db = getDb();
    const objectId = new ObjectId(prodId);
    return db
      .collection("products")
      .find({ _id: objectId })
      .next()
      .then((product) => {
        return product;
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }
}

module.exports = Product;
