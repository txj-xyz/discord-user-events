import { Client } from 'discord.js-selfbot-v13';


export default function ready(client: Client) {
    client.on("ready", () => {
        console.log('[client] logged in')
    })
}
