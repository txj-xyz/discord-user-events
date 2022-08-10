import { Client, Message } from "discord.js-selfbot-v13";
import { logger } from "../modules/Logger";

export default function message(client: Client) {
  client.on("messageCreate", function (message: Message) {
    logger.log({
      message: message.content,
    });
  });
}
