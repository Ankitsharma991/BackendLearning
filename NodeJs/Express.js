const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
app.get("/", (req, res) => {
  //   res.send("Hi");
  //   res.json({
  //     success: true,
  //     product: [],
  //   });

  //   res.status(404).send("My wish");
  //   const file = fs.readFile("./index.html");
  //   res.send(file);

  const pathName = path.resolve();
  res.sendFile(path.join(pathName, "./index.html"));
});
app.listen(5050, () => {
  console.log("Server is working");
});
