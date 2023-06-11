const http = require("http");
const routes = require("./NodeJSBasics/routes");

console.log(routes.someText);
const server = http.createServer(routes);

server.listen(3005);
