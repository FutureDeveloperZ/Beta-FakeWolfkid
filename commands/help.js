const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
      let helpembed = new Discord.RichEmbed()      .setTitle('List Of Commands | prefix b; | Help List ')      .setDescription('There is available commands for this bot on list!')      .addField(':newspaper: INFO', '7 Commands open \n``help info``')      .addField(':tada: FUN', '2 Commands open \n``help fun``')      .setColor('RANDOM')      .setFooter(`Requested by ${message.author.tag} | Help list`)

  message.channel.send(helpEmbed);
}

module.exports.help = {
  name: "help"
}
