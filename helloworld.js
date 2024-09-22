// Write a basic Node.js server that listens on port 3000 and returns a "Hello, World!"

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server is running at http://127.0.0.1:3000/");
});
