const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

let botEmbed = new Discord.RichEmbed()

let bicon = bot.user.displayAvatarURL
let embed = new Discord.RichEmbed()
 .setTitle("Bot Infomation!")
 .setColor("#f602ff")
 .addField("Bot Name", bot.user.tag)
 .addField("Bot Developer", " Wolfie")
 .addField("Invite to your server", `Sorry this bot is private!`)
 .setThumbnail(bicon)

   message.channel.send(embed);

return;
}

module.exports.help = {
  name: "botinfo"
}
