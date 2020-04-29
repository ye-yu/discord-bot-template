"use strict";
const PREFIX = "!";

function parse(context) {
  if (context.author.bot) return;
  let content = context.content;
  context.channel.send("Your message to me was " + content);
}

function online(client) {
  client.user.setActivity(`prefix ${PREFIX}`, { type: "LISTENING" });
  console.info("Bot is online. List of channels");
  client.channels.cache.forEach(channel => {
    if (channel.type === "text") {
      channel.send(`I am now online. My prefix is ${PREFIX}`);
    }
  });
}

module.exports = {
  parse: parse,
  online: online
}
