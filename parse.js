"use strict";
const PREFIX = "!";
const utils = require("./utils");

function parse(context) {
  if (context.author.bot) return;
  let content = context.content;
  if (content.startsWith("!")) {
    content = content.substring(1);
    let { key, args } = getKeyAndArgs(content);
    try {
      console.log(`Requiring ${key}`);
      let output = require(`./${key}`).call(args);
      context.channel.send(output);
    } catch (err) {
      console.error(err);
      context.channel.send("Your command is not recognised.");
    }
  } else {
    context.channel.send("Your message to me was " + content);
  }
}

function getKeyAndArgs(command) {
  let split = command.split(" ");
  return {
    key: split[0],
    args: split.splice(1)
  }
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
