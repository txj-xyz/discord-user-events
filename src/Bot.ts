// Setup .env file here
require("dotenv").config();

// Check token before anything else
if (!process.env.TOKEN)
  throw new Error("TOKEN missing, please add a user token.");

// Import Discord Selfbot Lib
import { Client, Intents } from "discord.js-selfbot-v13";
import message from "./events/MessageCreate";
import ready from "./events/Ready";

// Define DiscordJS v13 client.
let client: Client = new Client({
  intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS],
  checkUpdate: false,
});

// Start listeners
// error();
ready(client);
message(client);

client.login(process.env.TOKEN);
