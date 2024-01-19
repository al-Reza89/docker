const http = require("http");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  const number = _.random(0, 20);
  res.end("Hello World\n" + number);
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
