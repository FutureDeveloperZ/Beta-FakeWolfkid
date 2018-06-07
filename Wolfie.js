const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('My Self | --> b; <--', {type: 'WATCHING'});
    console.log('Uhhh I\'m ready!');
});

client.on('message', async message => {
    if (message.author.bot) return;
    let prefix = config.prefix;

    if (message.content === prefix + 'help') {
      let helpembed = new Discord.RichEmbed()
      .setTitle('Simple Comamnds | prefix ! ')
      .setDescription('There is available commands for this bot on list!')
      .addField('help', 'Bot commands list!')
      .addField('media', 'Check The Bot Creator Website/Media')
      .addField('dcinvite', 'Join our developer team on Discord server!')
      .addField('userinfo', 'Info about the about you or others')
      .addField('avatar', 'See your profile picture But Bigger')
      .addField('changelog', 'View the New Updates that have bene made to the Bot!')
      .addField('botinfo', 'check Bot Information and Versions')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help page 1`)
      return message.channel.send(helpembed);
    }
    
    if (message.content === prefix + 'media') {
      let mediaembed = new Discord.RichEmbed()
      .setTitle('Check Wolfie Social Media for awsome.Stuff Like is videos or tweets or other stuff <br> <br> [Click for is Youtube](https://www.youtube.com/c/Wolfkid)')
      .addField('Twitter', 'https://twitter.com/TheRealWolfkid')
      .addField('GitHub', 'https://github.com/Wolfkid200444')
      .addField('Fan Discord Server', 'http://bit.ly/WolfkidDiscord')
      .addField('Website', 'In Progress')
      .setColor('RANDOM')
      return message.channel.send(mediaembed);
    }
    
    if (message.content === prefix + 'botinfo') {
      let botinfoembed = new Discord.RichEmbed()
      .setTitle('BotInfo')
      .setDescription('Here is were you can find About the Bot Info!')
      .addField('Version', '1.3 Unstable')
      .setThumbnail(client.user.avatarURL)
      .addField('Bot Created', client.user.createdAt)
      .addField('Bot Username', client.user.username)
      .addField('Host We Use', 'Heroku')
      .addField('Bot Code', 'This Bot used Node.js and d.js Modules')
      .addField('Contributors + Helpers', 'People that Help me with the bot and code :) :: Cheitroid#2928, Zyphen#8624, shadowolf#9212, PokemonLeader#1712')
      return message.channel.send(botinfoembed);
    }
    
    if (message.content === prefix + 'changelog') {
      let changelogembed = new Discord.RichEmbed()
      .setTitle('Changelog')
      .setDescription('Check out Whats New on The Bot :D')
      .addField('May 11 2018 News', 'Code Added')
      .addField('May 14 2018 News Huge Update', 'Added Embeds To Commands And Alot')
      .addField('May 18 2018 News', 'Added Help Command And Few Commands Working again')
      .addField('May 27 2018 News', 'Added Footers to #ffffffffCommands and Avatar Command')
      .addField('May 30 2018 News', 'Remove Lewd Command as i bring alot of problems plus Adding Commands')
      .addField('June 7 2018 News', 'Added Some awsome commands(do f; or b; for help) and Fix Descriptions')
      .setColor('#808000')
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(changelogembed);
    }
    
    if (message.content === prefix + 'dcinvite') {
      let dcinviteembed = new Discord.RichEmbed()
      .setTitle('Our support Discord server')
      .setDescription('Check out our [Discord server](http://bit.ly/FutureDevs) to get news of FakeWolfkid and if you have issues with the bot or not working property you can report it on #report or on our GitHub')
      return message.channel.send(dcinviteembed);
    }
    
   if (message.content === prefix + 'avatar') {
     let avatarembed = new Discord.RichEmbed()
     .setTitle('Your Avatar!')
     .setColor('RANDOM')
     .setImage(message.author.avatarURL) 
     .setFooter(`Requested by ${message.author.tag}`)
     return message.channel.send(avatarembed);
   }

   if (message.content === prefix + 'userinfo') {
     let userinfoembed = new Discord.RichEmbed()
     .setTitle('User Info')
     .setColor('RANDOM')
     .setThumbnail(client.user.avatarURL)
     .addField('Your ID', message.author.id, true)
     .addField('Discord Server Created In', message.guild.createdAt.toDateString(), true)
     .addField('You Join at', message.member.joinedAt.toDateString(), true)
     .addField('Are you a Bot?', message.member.user.bot ? 'Yes' : 'No', true)
     .addField('Are You Nick in the server?', message.member.nickname || 'None', true)
     .setFooter(`Requested by ${message.author.tag}`)
    return message.channel.send(userinfoembed);
   }
   
   if (message.content === prefix + 'test') {
     let testembed = new Discord.RichEmbed()
     .setTitle('Test Command')
     .setDescription('Check [TestWebsite](https://google.com)')
     .setFooter(`Requested by ${message.author.tag}`)
    return message.channel.send(testembed);
   }
   
});client.login(process.env.BOT_TOKEN);