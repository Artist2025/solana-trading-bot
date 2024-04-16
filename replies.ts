import TelegramBot from "node-telegram-bot-api";

export const buyReply = (
  forceReply: TelegramBot.Message,
  bot: TelegramBot,
  chatId: number
) => {
  bot.onReplyToMessage(chatId, forceReply.message_id, async (replyMsg) => {
    const text = replyMsg.text ? replyMsg.text : "";
    const inputAmount = parseFloat(text);
    if (isNaN(inputAmount)) {
      await bot.sendMessage(
        chatId,
        "Invalid input. Please enter a valid number."
      );
    } else {
      await bot.sendMessage(chatId, `You entered: ${inputAmount}`);
    }
  });
};
