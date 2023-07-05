const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://UserName:An_kit.11@cluster0.8o3ect1.mongodb.net/`"
  )
    .then((client) => {
      console.log("Database Connected Successfully!!");
      _db = client.db("shop");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!!";
};

module.exports = mongoConnect;
exports.getDb = getDb;
