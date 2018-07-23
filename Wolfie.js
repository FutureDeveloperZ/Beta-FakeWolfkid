const Discord = require('discord.js');const client = new Discord.Client();const config = require('./config.json');

const wolfxtra = require('./wolfaxtra.js');
var S = require('string');
client.on('ready', () => {    client.user.setStatus('dnd');    client.user.setActivity('My Self | --> b; <--', {type: 'WATCHING'});    console.log('Uhhh I\'m ready!');});client.on('message', async message => {    if (message.author.bot) return;    let prefix = config.prefix;    if (message.content === prefix + 'help') {      let helpembed = new Discord.RichEmbed()      .setTitle('List Of Commands | prefix b; | Help List ')      .setDescription('There is available commands for this bot on list!')      .addField(':newspaper: INFO', '7 Commands open \n``help info``')      .addField(':tada: FUN', '2 Commands open \n``help fun``')
      .addField('MOD', '1 Command Open \n``help mod``')
      .addField('OWNER', '1 Command Open \n``help owner``')      .setColor('RANDOM')      .setFooter(`Requested by ${message.author.tag} | Help list`)      return message.channel.send(helpembed);    }  
    if (message.content === prefix + 'help info') {      let helpeinfombed = new Discord.RichEmbed()      .setTitle('Info commands | prefix b; | Info page ')      .setDescription('There is available commands for this Info \n``botinfo, changelog, dcinvite, media, userinfo``')      .setColor('RANDOM')      .setFooter(`Requested by ${message.author.tag} | Help info`)      return message.channel.send(helpeinfombed);    }
  
    if (message.content === prefix + 'help owner') {      let helpeinfombed = new Discord.RichEmbed()      .setTitle('Owner commands | prefix b; | Owner page ')      .setDescription('There is available commands for this Info \n``eval``')      .setColor('RANDOM')      .setFooter(`Requested by ${message.author.tag} | Help info`)      return message.channel.send(helpeownermbed);    }
      
        if (message.content === prefix + 'help mod') {      let helpeinfombed = new Discord.RichEmbed()      .setTitle('Mods commands | prefix b; | Mod page ')      .setDescription('There is available commands for this Info \n``kick``')      .setColor('RANDOM')      .setFooter(`Requested by ${message.author.tag} | Help info`)      return message.channel.send(helpmodmbed);    }          if (message.content === prefix + 'help fun') {      let helpfunembed = new Discord.RichEmbed()      .setTitle('Fun Comamnds | prefix b; | Fun list')      .setDescription('There is available commands for FUN!\n ``avatar, gayrate, ping``')      .setColor('RANDOM')      .setFooter(`Requested by ${message.author.tag} | Help fun`)      return message.channel.send(helpfunembed);    }    
    
    
    
    //INFO COMMANDS
    
    
    
    
        if (message.content === prefix + 'media') {      let mediaembed = new Discord.RichEmbed()      .setTitle('Check Wolfie Social Media')      .setDescription('Check Wolfie [Youtube Channel ](https://www.youtube.com/c/Wolfkid).\n Check Wolfie [Twitter](https://twitter.com/TheRealWolfkid).\n Check Wolfie [Fan Discord Server](http://bit.ly/WolfkidDiscord).\nAnd Also Check Wolfie [Github](https://github.com/Wolfkid200444)')      .setColor('RANDOM')      return message.channel.send(mediaembed);    }       if (message.content === prefix + 'botinfo') {
      var seconds = process.uptime();
        days = Math.floor(seconds / 86400);
        seconds %= 86400;
        hrs = Math.floor(seconds / 3600);
        seconds %= 3600;
        mins = Math.floor(seconds / 60);
        secs = seconds % 60;
        var uptime = days + ' days, ' + hrs + ' hours, ' + mins + ' minutes';
        var stats = new wolfaxtra.SubFields()
          .addField('Servers', client.guilds.size)
          .addField('Channels', client.channels.size)
          .addField('Users', client.users.size)
          .addField('Uptime Bot', uptime)
          .addField('RAM Usage', Math.round(process.memoryUsage().rss / 10485.76) / 100 + ' MB')
          .toString();
        var status = new Discord.RichEmbed()
          .setColor(Math.floor(Math.random() * 16777215))
          .setTitle('FakeWolfkidBOT | Information')
          .setDescription('This was originally made for ImpladeMinecraft. It is open source Discord bot written in Node.js!')
          .setThumbnail(client.user.avatarURL)
          .addField('Version', '1.7-Unstable')
          .addField('=====', '×××××')
          .addField('Owner', 'Wolfie#7213')
          .addField('Created', client.user.createdAt)
          .addField('=====', '×××××')
          .addField('**Stats**', stats)
          return message.channel.send(status);    }       if (message.content === prefix + 'changelog') {      let changelogembed = new Discord.RichEmbed()      .setTitle('Changelog')      .setDescription('Check out Whats New on The Bot :D')      .addField('July 23', 'Added New Features')      .setColor('#808000')      .setFooter(`Requested by ${message.author.tag}`)      return message.channel.send(changelogembed);    }        if (message.content === prefix + 'dcinvite') {      let dcinviteembed = new Discord.RichEmbed()      .setTitle('Our support Discord server')      .setDescription('Check out our [Discord server](http://bit.ly/FutureDevs) to get news of FakeWolfkid and if you have issues with the bot or not working property you can report it on #report or on our GitHub')      .setColor('DARK')      return message.channel.send(dcinviteembed);    }       if (message.content === prefix + 'userinfo') {     let userinfoembed = new Discord.RichEmbed()     .setTitle(`${message.author.tag} User Info`)     .setColor('RANDOM')     .setThumbnail(client.user.avatarURL)     .addField('Your ID', message.author.id, true)     .addField('You Join at', message.member.joinedAt.toDateString(), true)     .addField('Are you a Bot?', message.member.user.bot ? 'Yes' : 'No', true)     .setFooter(`Requested by ${message.author.tag}`)    return message.channel.send(userinfoembed);   }       
    
    
    
    
    
        //Added This To Seperate Commands and stuff -- This Section is for Fun cmd    
   
   
   
   
   
      if (message.content === prefix + 'avatar') {     let user = message.mentions.users.first() || message.author;     let avatarembed = new Discord.RichEmbed()     .setTitle('Your Avatar!')     .setAuthor(`${user.username}`)     .setColor('RANDOM')     .setImage(message.author.avatarURL)      .setFooter(`Requested by ${message.author.tag}`)     return message.channel.send(avatarembed);   }      if (message.content === prefix + 'gayrate'){      let user = message.mentions.users.first() || message.author;      let gayembed = new Discord.RichEmbed()      .setAuthor(`${user.username}`)      .addField(`Gay Rate`, `You Are **${Math.floor(Math.random() * 100)}% Gay**! :gay_pride_flag:`)     .setColor('RANDOM')     .setFooter(`AH! GAYYYYYY | Requested by ${message.author.tag}`)      return message.channel.send(gayembed)   }   
  if(message.content === prefix + "say"){
     let text = args.slice(1).join(" ");
     message.delete();
     message.channel.send(text);
   }
   
   
   
   
   
   //MODS COMMANDS YOU DUMMY ONLY HERE 
   
   
   
   
   if(message.content === prefix + 'kick') {
      let member = message.mentions.members.first();
      let reason = args.slice(1).join(" ");
      member.kick(reason);
   }
        
        
        
        
        
        
         //OWNER ONLY COMMANDS
         
         
         
         
         
         
         
        If (message.content === prefix + 'eval') {
        if (message.author.id == config.ownerid) {
          try {
            var estart = process.hrtime();
            var evaled = eval(args.join(' '));
            var eend = process.hrtime(estart);
            var tm = '*Executed in ' + (eend[0] * 1000 + eend[1] / 1000000) + ' ms.*\n';
            if (typeof evaled === 'object') {
              var mtd = message.channel.send(sendLong(tm + "\`\`\`\n" + util.inspect(evaled).replace(config.discordtoken, '<TOKEN HAS BEEN HIDDEN>') + "\n\`\`\`", 1992, 2000));
            } else if (typeof evaled === "undefined") {
              var mtd = message.channel.send(tm + "\`\`\`\n" + typeof undefined + "\n\`\`\`");
            } else if (evaled == null) {
              var mtd = message.channel.send(tm + "\`\`\`\n" + null + "\n\`\`\`");
            } else {
              var mtd = message.channel.send(sendLong(tm + "\`\`\`\n" + evaled.toString().replace(config.discordtoken, '<TOKEN HAS BEEN HIDDEN>') + "\n\`\`\`", 1992, 2000));
            }
            mtd.then(function(msg) {
              if (typeof evaled !== 'undefined') {
                if (typeof evaled.then == 'function') {
                  msg.delete(10000);
                }
              }
            });
          } catch (err) {
            if (err !== null && typeof err === 'object') {
              err = util.inspect(err);
            }
            message.channel.send(":x: Error!\n\`\`\`\n" + err.replace(config.discordtoken, '<TOKEN HAS BEEN HIDDEN>') + "\n\`\`\`").then(function(msg) {
              msg.delete(10000);
            });
          }
        } else {
          message.reply("You ain't doing that!");
        }
        break;
  
  }
   });client.login(process.env.BOT_TOKEN);