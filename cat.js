"use strict";
const https = require("https");
const { constructImageEmbed } = require("./utils");
require("dotenv").config();

function call(context) {
  const path = `/v1/images/search?mime_types=jpg%2Cpng&size=small&sub_id=${context.context.author.username}&limit=1`;
  let headers = {
      "X-API-KEY": process.env.CAT_TOKEN
  };

  const options = {
    hostname: 'api.thecatapi.com',
    port: 443,
    path: path,
    method: 'GET',
    headers: headers
  };

  let data;
  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data', d => {
      data = JSON.parse(d);
      console.log(data);
      context.context.channel.send(constructImageEmbed(data[0].url, {
        title: "Your On-demand Cat Picture",
        author: "The Cat API",
        description: `This cat on-demand is supplied for you, ${context.context.author.username}!`
      }));
    });
  });

  req.on('error', error => {
    console.error(error)
  });

  req.end();
}


module.exports = {
  call: call
}
