const http = require("http");
const express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log("In the middleware");
  next(); // this allows the req to continue to the next middleware
});

app.use((req, res, next) => {
  console.log("In the another middleware");
  res.send("<h2>This is from Express!</h2>");
  //   res.send("<h1>Hello from Response!!</h1>");
});

// const server = http.createServer(app);

// server.listen(3100);
app.listen(3100);
