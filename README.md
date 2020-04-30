# discord-bot-template
A fast discord bot template with demo of embed message delivery using TheCatAPI

Existing features
- change prefix
- detect nsfw channel
- on-demand cat pic 


### how to add new command
the program uses `require` to check for js file correspond to the command name.
here's how to add new command:

1. create `<command name>`.js
2. inside the new file, add `call(context)` method
  - `context` field contains two inner fields `context: type discord.js#Client` and `args: type Array` after the command
  
for example, to create `/ping` command, add `ping.js`, and then in the `call(context)` method, you can send a `pong` message using `context.context.channel.send("pong")`

arguments like `/ping 1 2 3` is extracted into `context.args` in array like `[1, 2, 3]`

easy, right? good.
