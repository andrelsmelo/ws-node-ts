import http from 'http';
import { Server } from 'socket.io';

export function configureWebSocketServer(): http.Server {
  const server = http.createServer();
  const io = new Server(server);

  io.on('connection', (socket) => {
    console.info('A client connected:', socket.id);

    // Eventos personalizados podem ser adicionados aqui, por exemplo:
    // socket.on('chatMessage', (message) => {
    //   console.log('Received message:', message);
    //   // Broadcasting para todos os clientes conectados
    //   io.emit('chatMessage', message);
    // });

    socket.on('disconnect', () => {
      console.info('A client disconnected:', socket.id);
    });
  });

  return server;
}

module.exports = {
  configureWebSocketServer,
};
