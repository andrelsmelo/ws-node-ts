import type { Request, Response } from 'express';
import { getAllMessages, sendMessage } from '../services/chat.service';
import { log } from '../utils/logger';

export const sendMessageController = (req: Request, res: Response): void => {
  try {
    const { userId, content } = req.body;
    const message = { userId, content, timestamp: new Date() };
    sendMessage(message);
    log(`Mensagem enviada por usuário ${userId}: ${content}`);
    res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    log(`Erro ao enviar mensagem: ${error}`);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

export const getAllMessagesController = (req: Request, res: Response): void => {
  try {
    const messages = getAllMessages();
    res.status(200).json(messages);
  } catch (error) {
    log(`Erro ao obter mensagens: ${error}`);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = {
  sendMessageController,
  getAllMessagesController,
};
