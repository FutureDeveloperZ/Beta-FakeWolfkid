const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Couldn't find user");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You Don't Have Permission")

  let banEmbed = new Discord.RichEmbed()
  .setDescription("Ban")
  .setColor("#fca650")
  .addField("Banned User", `${bUser}`)
  .addField("Banned by", `${message.author}`)
  .addField("Banned in", message.channel)
  .addField("time", message.createdAt)
  .addField("Reason", bReason);

  let banChannel = message.guild.channels.find(`name`, "kicks-and-bans");
  if(!banChannel) return message.channel.send("Can't find kicks-and-ban channels");

  message.guild.member(bUser).ban(bReason);
  banChannel.send(banEmbed);
  }

module.exports.help = {
  name: "ban"
}
