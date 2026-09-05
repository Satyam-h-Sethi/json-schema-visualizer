#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');

function startServer(port = 3000) {
  const htmlPath = path.join(__dirname, 'index.html');
  const server = http.createServer((req, res) => {
    if (fs.existsSync(htmlPath)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(fs.readFileSync(htmlPath));
    } else {
      res.writeHead(404);
      res.end('Not Found');
    }
  });

  server.listen(port, () => {
    console.log(`JSON Schema Visualizer running at http://localhost:${port}`);
  });
}

function main() {
  const args = process.argv.slice(2);
  const port = parseInt(args[0], 10) || 3000;
  startServer(port);
}

if (require.main === module) {
  main();
}

module.exports = { startServer };
