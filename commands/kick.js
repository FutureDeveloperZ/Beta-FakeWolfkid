const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Couldn't find user");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You Don't Have Permission")

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("Kick")
  .setColor("#fca650")
  .addField("Kicked User", `${kUser}`)
  .addField("Kicked by", `${message.author.tag}`)
  .addField("Kicked in", message.channel)
  .addField("time", message.createdAt)
  .addField("Reason", kReason);

  let kickChannel = message.guild.channels.find(`name`, "kicks-and-bans");
  if(!kickChannel) return message.channel.send("Can't find kicks-and-bans channels");

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);
  }

module.exports.help = {
  name: "kick"
}
