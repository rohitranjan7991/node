const getDb = require("../util/database").getDb;
const { ObjectId } = require("mongodb");

class User {
  constructor(userName, userEmail) {
    this.name = userName;
    this.email = userEmail;
  }

  save() {
    const db = getDb();
    const dataOps = db.collection("users_record").insertOne(this);
    console.log("dataOps: ", dataOps);

    return dataOps;
  }

  static fetchUserById(userId) {
    const db = getDb().collection("users_record");
    return db
      .findOne({ _id: new ObjectId(userId) })
      .then((result) => {
        console.log({ result });
        return result;
      })
      .catch((err) => {
        console.log({ err });
      });
  }
}

module.exports = User;
