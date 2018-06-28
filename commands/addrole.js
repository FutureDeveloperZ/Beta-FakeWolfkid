const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You Don't Have Permission");
  let rmember = message.guild.member(message.mentions.users.first()) || message.guild.member.get(args[0]);
  if(!rmember) return message.channel.send(`Couldn't Find User ${rmember}`);
  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send(`specify a role!`);
  let grole = message.guild.roles.find(`name`, role);
  if(!grole) return message.channel.send(`${grole} does nor exist specify a existing one`);

  if(!rmember.roles.has(grole.id));
  await(rmember.addRole(grole.id));

  try{
    await message.channel.send(`<@${rmember.id}> Your role has been set to ${grole.name}`)
  }catch(e){
    rmember.send(`Your role has been set to ${grole.name}`)
  }
}

module.exports.help = {
  name: "addrole"
}
