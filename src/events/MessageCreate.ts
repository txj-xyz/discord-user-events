import { Client, Message } from 'discord.js-selfbot-v13';


export default function message(client: Client) {
    client.on("messageCreate", function (message: Message) {
        console.log(message)
    })
}
