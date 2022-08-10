import { Client, Message } from "discord.js-selfbot-v13";
import { logger } from "../modules/Logger";

export default function ready(client: Client) {
  client.on("ready", () => {
    logger.log("[client] logged in");
  });
}
