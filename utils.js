"use strict";
const Discord = require("discord.js");

function constructImageEmbed(url, attr = {}) {
  const defImageAttr = getDefaultImageAttr();
  Object.keys(attr).forEach(key => {
    defAttr[key] = attr[key];
  });

  const imageEmbed = new Discord.MessageEmbed()
  .setColor(defImageAttr.color)
	.setTitle(defImageAttr.title)
	.setURL(defImageAttr.url)
	.setAuthor(defImageAttr.author, defImageAttr.url, defImageAttr.url)
	.setDescription(defImageAttr.description)
	.setThumbnail(defImageAttr.url)
	.setImage(defImageAttr.url)
	.setTimestamp();

  return imageEmbed;
}

function getDefaultImageAttr() {
  return {
    color: "#0099ff",
    title: "Abstract Title",
    url: "https://placekitten.com/g/80/80",
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
