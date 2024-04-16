import TelegramBot from "node-telegram-bot-api";
import { closeReplyOption, startReplyOptions } from "../lib/buttons";
import { helpMessage, startMessage } from "../lib/message";
import { Command, ICommands } from "../types";
import { sendMessage } from "../utils/botSendMessage";

export const commands = async ({ bot, msg, payload }: ICommands) => {
  const text = msg?.text;
  const chatId = msg?.chat.id;
  switch (text) {
    case Command.START:
      await start(msg, payload?.wallet, payload?.solBalance, bot);
      break;
    case Command.HOME:
      break;
    case Command.CHAT:
      break;
    case Command.HELP:
      await help(chatId, bot);
      break;
    case Command.SETTINGS:
      break;
    default:
      break;
  }
};

export const start = (
  msg: TelegramBot.Message,
  wallet: string | undefined,
  solBalance: number | undefined,
  bot: TelegramBot
) => {
  const chatId = msg.chat.id;

  // Check if wallet and solBalance are defined before using them
  const walletText = wallet ? wallet : "Unknown";
  const solBalanceText = solBalance ? solBalance : 0;
  sendMessage({
    chatId,
    text: startMessage({
      msg,
      wallet: walletText,
      others: { solBalance: solBalanceText },
    }),
    bot,
    options: startReplyOptions(),
  });
};

export const help = async (chatId: number, bot: TelegramBot) => {
  sendMessage({
    chatId,
    text: helpMessage(),
    bot,
    options: closeReplyOption(),
  });
};
