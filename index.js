
const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
var express = require('express')
const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));




  const { Server } = require('ws');

const wss = new Server({ server });
wss.on('connection', (ws) => {
    console.log('Client connected');
    wss.on('close', () => console.log('Client disconnected'));
  });



setInterval(() => {
    wss.clients.forEach((client) => {
      client.send(new Date().toTimeString());
    });
  }, 1000);