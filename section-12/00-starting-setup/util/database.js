const mongodb = require("mongodb");
const mongodbClient = mongodb.MongoClient;

let _db;

const mongoConnection = (callback) => {
  return mongodbClient
    .connect(
      "mongodb+srv://rohitranjan7991:b5XZCBcXDKg0Q730@cluster0.cffpspd.mongodb.net/shop?retryWrites=true&w=majority"
    )
    .then((result) => {
      console.log("connected successfully");
      _db = result.db();
      callback(result);
    })
    .catch((err) => {
      console.log("err: ", err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No data base found";
};

exports.mongoConnection = mongoConnection;
exports.getDb = getDb;
