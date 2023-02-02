const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');

const server = http.createServer((request, response) => {
  if (request.method === 'POST' && request.url === "/" + process.env.PASSWORD) {
    let body = '';
    request.on('data', chunk => {
      body += chunk.toString();
    });
    request.on('end', () => {
      fs.writeFileSync("./url", body, "utf-8");
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(body);
        }
      });
      response.end('OK');
    });
  } else {
    response.end("KO");
  }
});

const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
  ws.send(fs.readFileSync("./url", "utf-8").toString());
});

server.listen(process.env.PORT);
