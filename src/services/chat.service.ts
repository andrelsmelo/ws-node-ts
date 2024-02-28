import type { Message } from '../models/message.model';

const messages: Message[] = [];

export const sendMessage = (message: Message): void => {
  messages.push(message);
};

export const getAllMessages = (): Message[] => {
  return messages;
};

module.exports = {
  sendMessage,
  getAllMessages,
};
