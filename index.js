"use strict";

const Discord = require("discord.js");
const client = new Discord.Client();
const { parse, online } = require("./parse");
require("dotenv").config();

client.on("ready", () => {online(client);});
client.on("message", parse);
client.login(process.env.TOKEN);
