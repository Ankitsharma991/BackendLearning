const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://UserName:An_kit.11@cluster0.8o3ect1.mongodb.net/"
  )
    .then((client) => {
      console.log("Connected");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
