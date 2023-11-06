const mongodb = require("mongodb");
const mongodbClient = mongodb.MongoClient;

const mongoConnection = (callback) => {
  return mongodbClient
    .connect(
      "mongodb+srv://rohitranjan7991:b5XZCBcXDKg0Q730@cluster0.cffpspd.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((result) => {
      console.log("connected successfully");
      callback(result);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

module.exports = mongoConnection;
