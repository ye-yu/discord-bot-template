"use strict";
const PREFIX = "!";
const utils = require("./utils");

function parse(context) {
  if (context.author.bot) return;
  let content = context.content;
  if (content.startsWith(PREFIX)) {
    content = content.substring(1);
    let { key, args } = getKeyAndArgs(content);
    try {
      console.info(`Requiring ${key}`);
      let output = require(`./${key}`).call({context: context, args: args});
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
    if (channel.nsfw) {
      channel.send(`This channel is marked as NSFW. NSFW feature is unlocked!`)
      .catch((err) => {
        console.info(`Online message is not send to ${channel.name} because of ${err}`);
      });

    }
  }
}

module.exports = {
  parse: parse,
  online: online
}
