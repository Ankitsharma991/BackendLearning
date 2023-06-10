const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my NodeJs Server</h1><p>My Name is Ankit Sharma</p></body>");
  res.write("</html>");
});

server.listen(3005);
