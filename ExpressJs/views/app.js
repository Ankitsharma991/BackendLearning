const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars").create({});

app.engine("hbs", expressHbs.engine);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, ""));

const rootDir = require("../utils/path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

const shopRoutes = require("./shop");
const adminRoutes = require("./add-product");

app.use(shopRoutes);
app.use(adminRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "", "not-found.html"));
});

app.listen(3010);
