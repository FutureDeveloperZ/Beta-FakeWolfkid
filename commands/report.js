const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Couldn't find user");
  let reason = args.join(" ").slice(22);

      let reportEmbed = new Discord.RichEmbed()
      .setDescription("Report")
      .setColor("#15f153")
      .addField("Report User", `${rUser}`)
      .addField("Reported by", `${message.author}`)
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", reason);

            let reportschannel = message.guild.channels.find(`name`, "reports-and-warns");
            if(!reportschannel) return message.guild.createChannel("reports-and-warns");

            message.delete().catch(O_o=>{});
            reportschannel.send(reportEmbed);
        }

module.exports.help = {
  name: "report"
}
