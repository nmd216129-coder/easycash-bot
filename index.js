
import TelegramBot from "node-telegram-bot-api";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const bot = new TelegramBot(process.env.BOT_TOKEN, {
  polling: true,
});

bot.onText(/\/start(?: (.+))?/, (msg, match) => {
  const chatId = msg.chat.id;
  const refCode = match[1];

  if (refCode) {
    bot.sendMessage(
      chatId,
      `🎉 Welcome to EasyCash!\n\nReferral Code: ${refCode}`
    );
  } else {
    bot.sendMessage(
      chatId,
      "👋 Welcome to EasyCash!\n\nStart earning today!"
    );
  }
});

app.get("/", (req, res) => {
  res.send("EasyCash Bot is running!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
