"use strict";
const Discord = require("discord.js");

function constructImageEmbed(url, attr = {}) {
  const defImageAttr = getDefaultImageAttr();
  Object.keys(attr).forEach(key => {
    defImageAttr[key] = attr[key];
  });

  const imageEmbed = new Discord.MessageEmbed()
  .setColor(defImageAttr.color)
	.setTitle(defImageAttr.title)
	.setURL(url)
	.setAuthor(defImageAttr.author, url, url)
	.setDescription(defImageAttr.description)
	.setImage(url)
	.setTimestamp();

  return imageEmbed;
}

function getDefaultImageAttr() {
  return {
    color: "#0099ff",
    title: "Abstract Title",
    author: "Mr Nobody",
    description: "A description by Mr Nobody"
  };
}


function isInArray(key, arr) {
  return arr.indexOf(key) > -1;
}

function isInObjectKey(key, obj) {
  return isInArray(key, Object.keys(obj));
}

module.exports = {
  isInArray: isInArray,
  isInObjectKey: isInObjectKey,
  constructImageEmbed: constructImageEmbed
};
