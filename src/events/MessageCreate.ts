import { Client, ClientUser, Guild, GuildMember, Message, User } from "discord.js-selfbot-v13";
import { logger } from "../modules/Logger";

export default function message(client: Client) {
    client.on("messageCreate", async function (message: Message) {
        const guild: Guild | undefined = client.guilds.cache.find(e => e.id === message.guildId);
        // const user: User | undefined = client?.users.cache.find(e => e.id === message.author.id);
        const guilduser: GuildMember | undefined = guild?.members.cache.find(e => e.id === message.author.id);
        logger.log(`user is: ${guilduser?.user.username}`);
  });
}