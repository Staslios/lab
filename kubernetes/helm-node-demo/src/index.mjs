import http from "http";

const port = process.env.PORT || 7001;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from my Node server!");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});