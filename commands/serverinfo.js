const Discord = require("discord.js");
const bot = new Discord.Client();


module.exports.run = async (bot, message, args) => {

let sicon = message.guild.iconURL;
let serverEmbed = new Discord.RichEmbed()
.setTitle(`${message.guild.name} Information`)
.setColor("#fffa00")
.setThumbnail(sicon)
//.addField("Server Name", message.guild.name)
.addField("Created On", message.guild.createdAt)
.addField("Total Members", message.guild.memberCount);

return message.channel.send(serverEmbed);
}

module.exports.help = {
  name: "serverinfo"
}
