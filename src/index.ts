import type { Request, Response } from 'express';
import express from 'express';
import type http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { login, register } from './controllers/auth.controller';
import {
  getAllMessagesController,
  sendMessageController,
} from './controllers/chat.controller';
import { validateUsername } from './utils/validator';
import configureWebSocketServer from './websocket.config';

const app = express();
const server: http.Server = configureWebSocketServer(); // Importando e configurando o servidor WebSocket
const io: SocketIOServer = new SocketIOServer(server); // Iniciando o Socket.IO no servidor

app.use(express.json());

app.post('/login', login);
app.post('/register', (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!validateUsername(username)) {
    return res.status(400).json({ error: 'Nome de usuário inválido' });
  }
  // Lógica para registrar um novo usuário
  register(req, res);
});

app.post('/chat/message', sendMessageController);

app.get('/chat/messages', getAllMessagesController);

app.get('/', (req: Request, res: Response) => {
  res.send('Servidor rodando!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.info(`Servidor HTTP iniciado na porta ${PORT}`);
});
