const http = require("http");
// import http from "http";
// const gfName = require("./features");
// console.log(gfName);
// console.log(http)
// import { generateNumber } from "./features";
const fs = require("fs");

const generateNumber = require("./features");
console.log(generateNumber());

const server = http.createServer((req, res) => {
  // console.log(req.url);
  // res.end("Nice")
  if (req.url === "/") {
    res.end("<h1>This is Home Page</h1>");
  }
  if (req.url === "/file") {
    // res.end(file);
    fs.readFile("./index.html", (err, data) => {
      res.end(file);
    });
  }
  if (req.url === "/about") {
    res.end("<h1>This is Home Page</h1>");
  }
  if (req.url === "/contact") {
    res.end("<h1>This is Contact Page</h1>");
  }
  if (req.url === "/love") {
    res.end(`<h1>Love is ${generateNumber()}</h1>`);
  }
  if (req.url === "/work") {
    res.end("<h1>This is Work Demo Page</h1>");
  } else {
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(5000, () => {
  console.log("Server is Working");
});
