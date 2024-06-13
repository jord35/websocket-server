const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('New client connected');

  // Envoi d'un message au client
  ws.send('Welcome new client!');

  // Réception de messages du client
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    // Réponse au client
    ws.send(`Server received: ${message}`);
  });

  // Gestion de la déconnexion du client
  ws.on('close', () => {
    console.log('Client disconnected');
  });

  // Gestion des erreurs
  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
