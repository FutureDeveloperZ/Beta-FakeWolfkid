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
      .setTitle('Simple Comamnds | prefix b; | Page 1 ')
      .setDescription('There is available commands for this bot on list!')
      .addField('help', 'Bot commands list! (Theres 1 to 2 pages)')
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
    
    if (message.content === prefix + 'help2') {
      let helpe2mbed = new Discord.RichEmbed()
      .setTitle('Simple Comamnds | prefix b; | Page 2 ')
      .setDescription('2 Page of Help')
      .addField('Host', 'Check out our new Host')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help page 2`)
      return message.channel.send(helpe2mbed);
    }
    
    if (message.content === prefix + 'media') {
      let mediaembed = new Discord.RichEmbed()
      .setTitle('Check Wolfie Social Media')
      .setDescription('Check Wolfie [Youtube Channel ](https://www.youtube.com/c/Wolfkid).\n Check Wolfie [Twitter](https://twitter.com/TheRealWolfkid).\n Check Wolfie [Fan Discord Server](http://bit.ly/WolfkidDiscord).\nAnd Also Check Wolfie [Github](https://github.com/Wolfkid200444)')
      .setColor('RANDOM')
      return message.channel.send(mediaembed);
    }
    
    if (message.content === prefix + 'botinfo') {
      let botinfoembed = new Discord.RichEmbed()
      .setTitle('BotInfo')
      .setDescription('Here is were you can find About the Bot Info!')
      .addField('Version', '1.5 Unstable')
      .setThumbnail(client.user.avatarURL)
      .addField('Bot Created', client.user.createdAt)
      .addField('Bot Username', client.user.username)
      .addField('Host We Use', 'Heroku')
      .addField('Bot Code', 'This Bot used Node.js and d.js Modules')
      .addField('Contributors + Helpers', 'People that Help me with the bot and co : Cheitroid#2928, Zyphen#8624, shadowolf#9212, PokemonLeader#1712')
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
      .addField('June 17 2018 News', 'Added New Command + Awsome Feature')
      .setColor('#808000')
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(changelogembed);
    }
    
    if (message.content === prefix + 'dcinvite') {
      let dcinviteembed = new Discord.RichEmbed()
      .setTitle('Our support Discord server')
      .setDescription('Check out our [Discord server](http://bit.ly/FutureDevs) to get news of FakeWolfkid and if you have issues with the bot or not working property you can report it on #report or on our GitHub')
      .setColor('DARK')
      return message.channel.send(dcinviteembed);
    }
    
   if (message.content === prefix + 'userinfo') {
     let userinfoembed = new Discord.RichEmbed()
     .setTitle(`${message.author.tag} User Info`)
     .setColor('RANDOM')
     .setThumbnail(client.user.avatarURL)
     .addField('Your ID', message.author.id, true)
     .addField('You Join at', message.member.joinedAt.toDateString(), true)
     .addField('Are you a Bot?', message.member.user.bot ? 'Yes' : 'No', true)
     .setFooter(`Requested by ${message.author.tag}`)
    return message.channel.send(userinfoembed);
   }
   
   if (message.content === prefix + 'host') {
      let hostembed = new Discord.RichEmbed()
      .setTitle('Check Our New Host')
      .setDescription('Click This [Link](https://discord.gg/r9fYKEA) to Join our new Host and Host your Own Bot!!')
      .setColor('WHITE')
      .setFooter(`${message.author.tag}`)
     return message.channel.send(hostembed);
     }
     
    //Added This To Seperate Commands and stuff -- This Section is for Fun cmd
    
   if (message.content === prefix + 'avatar') {
     let avatarembed = new Discord.RichEmbed()
     .setTitle('Your Avatar!')
     .setColor('RANDOM')
     .setImage(message.author.avatarURL) 
     .setFooter(`Requested by ${message.author.tag}`)
     return message.channel.send(avatarembed);
   }
   
   case "hug" : {
			if (message.mentions.members.size == 0) {
				message.channel.send("You have to mention the user you want to hug!");
				break;		
			}

			var images = [
				"https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif",
				"https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif",
				"https://media.giphy.com/media/xZshtXrSgsRHy/giphy.gif",
				"https://media.giphy.com/media/svXXBgduBsJ1u/giphy.gif",
                "https://media.giphy.com/media/143v0Z4767T15e/giphy.gif",
                "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
				"https://i.imgur.com/KWCgD5x.gif",
				"https://lh3.googleusercontent.com/-oWQTWYfhlEI/VWRQDOAIYCI/AAAAAAAABWc/Qr-Xc6G8Nuo/w800-h800/tumblr_m68m3wjllW1qewqw2.gif",
				"https://i.imgur.com/6koVXbP.gif",
				"https://pa1.narvii.com/6717/9c8654d42e2d13eca2ec5ce8f9052e8350c997fa_00.gif",
                "https://media1.tenor.com/images/d0c2e7382742f1faf8fcb44db268615f/tenor.gif",
                "https://vignette.wikia.nocookie.net/r2d/images/4/40/9cd13826.gif/revision/latest?cb=20141229175738", 
                "https://thumbs.gfycat.com/WellgroomedVapidKitten-max-1mb.gif",
				"https://cdn.discordapp.com/attachments/396609929504489473/432552500361691156/tenor.png",
				"https://tenor.com/view/hug-anime-love-dragon-loli-gif-9920978",
				"https://tenor.com/view/mika-mikaela-hyakuya-owari-no-gif-7419864"
			];

			message.mentions.members.forEach((member, memberId) => {
				message.channel.send(new Discord.RichEmbed({
					description: `**${message.member.displayName}** hugs **${member.displayName}**!`,
					image: {
						url: images[Math.floor(Math.random() * images.length)]
					}
				}));
			});

			break;
		}
   
});client.login(process.env.BOT_TOKEN);