/* -------------------------------------------------------------------------------------------------
 * This handles the input replies to the BOT
 * -----------------------------------------------------------------------------------------------*/

import TelegramBot from "node-telegram-bot-api";

export const handleInputAmount = (
  bot: TelegramBot,
  msg: TelegramBot.Message,
  InputFromChatId: number
): void => {
  if (msg.chat.id === InputFromChatId && msg.reply_to_message && msg.text) {
    const inputAmount = parseFloat(msg?.text);
    console.log(inputAmount);

    if (!isNaN(inputAmount)) {
      console.log("Input amount:", inputAmount);
      //   this will call the swap function
    } else {
      bot.sendMessage(
        msg.chat.id,
        "Invalid input amount. Please provide a valid number."
      );
    }
  }
};
