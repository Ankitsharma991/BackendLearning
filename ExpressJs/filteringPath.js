const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

const adminRoutes = require("./admin");
const shopRoutes = require("./shop");

app.use("", adminRoutes); // "", for a common path
app.use("", shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found!!</h1>");
});

app.listen(3010);
