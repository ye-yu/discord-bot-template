"use strict";

const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const { parse, online } = require("./parse");

require("dotenv").config();
require("./settings").initSettingFile();

client.on("ready", () => {online(client);});
client.on("message", parse);
client.login(process.env.TOKEN);
