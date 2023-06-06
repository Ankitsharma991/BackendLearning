const express = require("express");
const app = express();
const path = require("path");

// Using middle wares
// express.static("./public");
app.use(express.static(path.join(path.resolve(), "public")));
// console.log(path.join(path.resolve(), "public"));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs"); // setting up view engine
app.get("/", (req, res) => {
  res.render("form", { myName: "Ankit Sharma" });
});
app.post("/", (req, res) => {
  console.log(req.body);
  users.push({ username: req.body.name, email: req.body.email });
});
app.listen(5500, () => {
  console.log("Server is working");
});
