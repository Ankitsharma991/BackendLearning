const http = require("http");
// console.log(http)

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end
});

server.listen(5000, () => {
  console.log("Server is Working");
});
