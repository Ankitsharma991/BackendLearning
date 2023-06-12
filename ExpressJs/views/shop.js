const express = require("express");
const path = require("path");
const router = express.Router();

const rootDir = require("../utils/path");
const adminData = require("./add-product");

router.get("/", (req, res, next) => {
  res.render('shop');
});

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "./", "add-product.html"));
});

module.exports = router;