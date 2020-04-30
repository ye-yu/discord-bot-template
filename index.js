"use strict";

const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const { parse, online } = require("./parse");
require("dotenv").config();

console.info("Initialisation...");
const SETTING_FILE = "settings.json";
fs.stat(SETTING_FILE, (err, stats) => {
  if(stats === undefined) {
    console.info(`${SETTING_FILE} does not exists. Creating one right now.`);
    fs.writeFileSync(SETTING_FILE, "{}");
  } else {
    if (!stats.isFile()) {
      console.error(`${SETTING_FILE} is a directory.`);
      process.exit(1);
    }
  }
});

client.on("ready", () => {online(client);});
client.on("message", parse);
client.login(process.env.TOKEN);
