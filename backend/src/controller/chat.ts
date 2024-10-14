import * as express from "express";

export interface TelegramChat {
  meta?: TelegramChatMetaData;
}

export interface TelegramChatM{
  summary?: TelegramChatSummary;
}

export interface TelegramChatN {
  text: string;
  updatedAt: string;
  value?: string;
}

export interface TelegramChatO {
  text: string;
  updatedAt: string;
  value?: string;
}

export interface TelegramChatT {
  title: string;
  text: string;
}

export interface Event {
  eventName: string;
  createdAt: string;
}

export interface TelegramChatL {
  text: string;
  updatedAt: string;
}

export interface TelegramChatS {
  text: string;
  updatedAt: string;
}

export interface TelegramChatF {
  name: string;
  participants?: any;
  updatedAt: string;
}

const generateSingleGptSummary = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { chatId, type } = req.body;

    const client = await startTelegramClient(sessionString);

    const specificDialog = await client.getDialogs();

    const rawMessages = await client.getMessages(entityId, {
    });

  return null;
};


export default chatController;
