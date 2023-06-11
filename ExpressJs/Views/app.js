const express = require("express");
const app = express();
const path = require("path");
// const res = require('../public')
const bodyParser = require("body-parser");

const rootDir = require("../utils/path");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname, "public")));

const shopRoutes = require("./shop");
const adminRoutes = require("./add-product");

app.use(shopRoutes);
app.use(adminRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "public", "not-found.html"));
});

app.listen(3110);
