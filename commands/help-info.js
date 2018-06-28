const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


  message.channel.send(helpEmbed);
}

module.exports.help = {
  name: "help info"
}
