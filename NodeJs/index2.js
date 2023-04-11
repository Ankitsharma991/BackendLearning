const express = require("express");
const app = express();
const path = require("path");

// express.static("./public");
// app.use(express.static(path.join(path.resolve(), "public")));
// console.log(path.join(path.resolve(), "public"));

app.set("view engine", "ejs"); // setting up view engine
app.get("/", (req, res) => {
  res.render("form", { myName: "Ankit Sharma" });
});

app.listen(5500, () => {
  console.log("Server is working");
});
