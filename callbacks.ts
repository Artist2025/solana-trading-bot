import TelegramBot from "node-telegram-bot-api";
import { CallBacks, ICallbacks, ICommandPayload } from "../types";
import { help } from "./commands";
import {
  settingsMessage,
  walletMessage,
  depositMessage,
  buyMessage,
} from "../lib/message";
import {
  buyReplyOptions,
  depositReplyOptions,
  settingsReplyOptions,
  walletReplyOptions,
} from "../lib/buttons";
import { sendMessage } from "../utils/botSendMessage";

export const callbackQuery = async ({
  bot,
  callbackQuery,
  payload,
}: ICallbacks) => {
  const chatId = callbackQuery.message?.chat?.id ?? 0;
  const message = callbackQuery?.message || undefined;
  const data = callbackQuery.data;
  if (chatId !== undefined && message !== undefined) {
    switch (data) {
      case CallBacks.BUY:
        buy(bot, message);
        break;
      case CallBacks.SELL:
        break;
      case CallBacks.HELP:
        help(chatId, bot);
        break;
      case CallBacks.REFER:
        break;
      case CallBacks.ALERTS:
        break;
      case CallBacks.WALLET:
        if (payload) {
          wallet(message, bot, payload);
        }
        break;
      case CallBacks.SETTINGS:
        settings(bot, chatId);
        break;
      case CallBacks.PIN_MESSAGE:
        pin_message(bot, message);
        break;
      case CallBacks.REFRESH:
        break;
      case CallBacks.CLOSE:
        close(bot, message);
        break;
      case CallBacks.DEPOSIT_SOL:
        if (payload) {
          deposit(bot, message, payload);
        }
        break;
      case CallBacks.WITHDRAW_ALL_SOL:
        break;
      case CallBacks.WITHDRAW_X_SOL:
        break;
      case CallBacks.WALLET_RESET:
        break;
      case CallBacks.EXPORT_PRIVATE_KEY:
        break;
      case CallBacks.ANNOUNCEMENT:
        break;
      case CallBacks.MIN_POS_VALUE:
        break;
      case CallBacks.AUTO_BUY:
        break;
      case CallBacks.AUTO_BUY_VALUE:
        break;
      case CallBacks.BUY_LEFT_VALUE:
        break;
      case CallBacks.BUY_RIGHT_VALUE:
        break;
      case CallBacks.SELL_LEFT_VALUE:
        break;
      case CallBacks.SELL_RIGHT_VALUE:
        break;
      case CallBacks.MAX_PRICE_IMPACT:
        break;
      case CallBacks.PRIORITY_VALUE:
        break;
      case CallBacks.SLIPPAGE_BUY:
        break;
      case CallBacks.SLIPPAGE_SELL:
        break;
      case CallBacks.TRANSACTION_PRIORITY:
        break;
      case CallBacks.TURBO:
        break;
      default:
        break;
    }
  }
};

export const close = (bot: TelegramBot, message: TelegramBot.Message) => {
  bot.deleteMessage(message.chat.id, message.message_id);
};

export const settings = (bot: TelegramBot, chatId: number) => {
  sendMessage({
    chatId,
    text: settingsMessage(),
    bot,
    options: settingsReplyOptions(),
  });
};

export const pin_message = (bot: TelegramBot, message: TelegramBot.Message) => {
  bot.pinChatMessage(message.chat.id, message.message_id);
};

export const wallet = (
  message: TelegramBot.Message,
  bot: TelegramBot,
  payload: ICommandPayload
) => {
  const chatId = message.chat.id;

  const { wallet, solBalance } = payload;
  // Check if wallet and solBalance are defined before using them
  const walletText = wallet ? wallet : "Unknown";
  const solBalanceText = solBalance ? solBalance : 0;
  sendMessage({
    chatId,
    text: walletMessage({
      msg: message,
      wallet: walletText,
      others: { solBalance: solBalanceText },
    }),
    bot,
    options: walletReplyOptions(),
  });
};

export const deposit = (
  bot: TelegramBot,
  message: TelegramBot.Message,
  payload: ICommandPayload
) => {
  const chatId = message.chat.id;

  const { wallet: address } = payload;
  const wallet = address ? address : "Unknown";
  sendMessage({
    chatId,
    text: depositMessage(wallet),
    bot,
    options: depositReplyOptions(),
  });
};

export const buy = (bot: TelegramBot, message: TelegramBot.Message) => {
  const chatId = message.chat.id;
  if (message?.from?.id) {
    sendMessage({
      chatId,
      text: buyMessage(),
      bot,
      options: buyReplyOptions(message.from.id),
      reply: true,
      replyText: "This is a text",
    });
  }
};
