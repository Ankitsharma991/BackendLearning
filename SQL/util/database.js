const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "localhost",
  port: 5432,
  password: "root",
  database: "postgres",
});

client.connect();
client.query(`Select * from ankit`, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end();
});
