const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  res.send("<h1>This always runs!</h1>");
  next();
});

app.use("/product", (req, res, next) => {
  res.send("<h1>Hello from the Add Product Page!</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express</h1>");
  //   next();
});

app.listen(3100);
