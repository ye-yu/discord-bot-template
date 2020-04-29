"use strict";

function parse(context) {
  if (context.author.bot) return;
  let content = context.content;
  context.channel.send("Your message to me was " + content);
}

function online(context) {
  console.info("Bot is online.");
}

module.exports = {
  parse: parse,
  online: online
}
