const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));


module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.send.channel("You Dont Have Permission");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.channel.send("@{user} Not Found");
    let reason = args.join(" ").slice(22);

    if(!warns[wUser.id]) warns[wUser.id] = {
      warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
      if (err) console.log(err);
    });

    let warnEmbed = new Discord.RichEmbed()

    .setTitle("Warns")
    .setAuthor(message.author.username)
    .setColor("#05ffee")
    .addField("Warned User",`${wUser}`)
    .addField("Warned In", message.channel)
    .addField("Number of Warnings", warns[wUser.id].warns)
    .addField("Reason", reason);

    let warnchannel = message.guild.channels.find(`name`, "incidents")
    if(!warnchannel) return message.channel.send("Couldn't Find Channel incidents")

    warnchannel.send(warnEmbed);

    if(warns[wUser.id].warns == 3){
      let muterole = message.guild.roles.find(`name`, "muted");
      if(!muterole) return message.reply("You Should Create A Role Called mute in order for this to work. Make sure you cross the send message");

      let mutetime = "600s";
      await(wUser.addRoles(muterole.id));
      message.channel.send(`${wUser} has been temporarily muted for 10 minutes for 3 warns`);

      setTimeout(function(){
        wUser.removeRole(muterole.id)
        message.channel.send(`${wUser} has been unmuted`)
      }, ms(mutetime))
    }

    if(warns[wUser.id].warns == 5){
      let muterole = message.guild.roles.find(`name`, "muted");
      if(!muterole) return message.channel.send("You Should Create A Role Called mute in order for this to work. Make sure you cross the send message");

      let mutetime = "3600s";
      await(wUser.addRoles(muterole.id));
      message.channel.send(`${wUser} has been temporarily muted for 1 hour for 5 warns`);

      setTimeout(function(){
        wUser.removeRole(muterole.id)
        message.channel.send(`${wUser} has been unmuted`)
      }, ms(mutetime))
    }

    if(warns[wUser.id].warns == 10){
      message.guild.member(wUser).ban(reason);
      message.channel.send(`${wUser} has been Banned for 10 warns`)
    }

}

module.exports.help = {
  name: "warn"
}
