const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
      let helpfunembed = new Discord.RichEmbed()      .setTitle('Fun Comamnds | prefix b; | Fun list')      .setDescription('There is available commands for FUN!\n ``avatar, gayrate, ping``')      .setColor('RANDOM')
  message.channel.send(helpEmbed);
}

module.exports.help = {
  name: "help fun"
}
