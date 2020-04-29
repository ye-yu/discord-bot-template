"use strict";
const PREFIX = "!";

function parse(context) {
  if (context.author.bot) return;
  let content = context.content;
  context.channel.send("Your message to me was " + content);
}

function online(client) {
  client.user.setActivity(`prefix ${PREFIX}`, { type: "LISTENING" });
  console.info("Bot is online.");
  client.channels.cache.forEach(sendOnlineMessageToChannel);
}

function sendOnlineMessageToChannel(channel) {
  if (channel.type === "text") {
    channel.send(`I am now online. My prefix is ${PREFIX}`)
    .catch((err) => {
      console.info(`Online message is not send to ${channel.name} because of ${err}`);
    });
  }
}

module.exports = {
  parse: parse,
  online: online
}
