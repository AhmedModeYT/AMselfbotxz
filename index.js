const Discord = require("discord.js");
const djs = require('discord.js-commando');
//const client = new Discord.Client();
const config = require("./config.json");
require("./keepOnline.js")
const client = new djs.CommandoClient({
    commandPrefix: 'a',
    owner: ['402101025437384704','552189000685846532','542208633690128388'],
    disableEveryone: false,
  unknownCommandResponse: false
});

client.registry.registerGroup('admin', 'Admin');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

client.on('message', function(message){
  if(message.content == 'ahelp')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('Support Us By Subscribing To Our Channel And Watching The Videos And Leave A Like All Of That Is Appreciated! https://www.YouTube.com/AhmedMode')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
    if(message.content == 'ahmed mode ui')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Click Me To Download Ahmed Modes SirHurt Custom UI')
      .setDescription('Press Above To Download The Custom UI :)')
      .setTimestamp()
      .setURL('https://cdn.discordapp.com/attachments/681279627095965715/681507684830150737/AhmedMode_Reborn.rar')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'Ahmed Mode ui')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Click Me To Download Ahmed Modes SirHurt Custom UI')
      .setDescription('Press Above To Download The Custom UI :)')
      .setTimestamp()
      .setURL('https://cdn.discordapp.com/attachments/681279627095965715/681507684830150737/AhmedMode_Reborn.rar')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'Ahmed Mode Ui')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Click Me To Download Ahmed Modes SirHurt Custom UI')
      .setDescription('Press Above To Download The Custom UI :)')
      .setTimestamp()
      .setURL('https://cdn.discordapp.com/attachments/681279627095965715/681507684830150737/AhmedMode_Reborn.rar')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'Ahmed Mode UI')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Click Me To Download Ahmed Modes SirHurt Custom UI')
      .setDescription('Press Above To Download The Custom UI :)')
      .setTimestamp()
      .setURL('https://cdn.discordapp.com/attachments/681279627095965715/681507684830150737/AhmedMode_Reborn.rar')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'AHMED MODE UI')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Click Me To Download Ahmed Modes SirHurt Custom UI')
      .setDescription('Press Above To Download The Custom UI :)')
      .setTimestamp()
      .setURL('https://cdn.discordapp.com/attachments/681279627095965715/681507684830150737/AhmedMode_Reborn.rar')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'Ahelp')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('Support Us By Subscribing To Our Channel And Watching The Videos And Leave A Like All Of That Is Appreciated! https://www.YouTube.com/AhmedMode')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'AHelp')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('Support Us By Subscribing To Our Channel And Watching The Videos And Leave A Like All Of That Is Appreciated! https://www.YouTube.com/AhmedMode')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'AHELP')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('Support Us By Subscribing To Our Channel And Watching The Videos And Leave A Like All Of That Is Appreciated! https://www.YouTube.com/AhmedMode')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'aHelp')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Setquest Error? Mega Direct Link Enjoy')
      .setDescription('Support Us By Subscribing To Our Channel And Watching The Videos And Leave A Like All Of That Is Appreciated! https://www.YouTube.com/AhmedMode')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'aHELP')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Setquest Error? Mega Direct Link Enjoy')
      .setDescription('Support Us By Subscribing To Our Channel And Watching The Videos And Leave A Like All Of That Is Appreciated! https://www.YouTube.com/AhmedMode')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'acredit')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Team')
      .setDescription('This Bot Was Made And Developed By: Ahmed Mode And YHK https://www.YouTube.com/AhmedMode')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'aCredit')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Team')
      .setDescription('This Bot Was Made And Developed By: Ahmed Mode And YHK https://www.YouTube.com/AhmedMode')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'gay')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('You Are A Big Gay 100% Homo Lmao')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'Gay')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('You Are A Big Gay 100% Homo Lmao')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'Doge')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('hes gonna ear rape you dont')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'doge')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('hes gonna ear rape you dont')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'Ahmed Mode')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('Ahmed Mode Might Be AFK Sleeping Or Offline Or Maybe Busy Editing Video Or Anything Try To Contact Him Later If He Didnt Respond To This Messege')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'Ahmed')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('Ahmed Mode Might Be AFK Sleeping Or Offline Or Maybe Busy Editing Video Or Anything Try To Contact Him Later If He Didnt Respond To This Messege')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'ainvite')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Click Me To Invite Me Into Your Server')
      .setDescription('Click Messege Above')
      .setTimestamp()
      .setURL('https://discordapp.com/oauth2/authorize?&client_id=600528351706218525&scope=bot&permissions=8')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'aInvite')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Click Me To Invite Me Into Your Server')
      .setDescription('Click Messege Above')
      .setTimestamp()
      .setURL('https://discordapp.com/oauth2/authorize?&client_id=600528351706218525&scope=bot&permissions=8')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'AInvite')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Click Me To Invite Me Into Your Server')
      .setDescription('Click Messege Above')
      .setTimestamp()
      .setURL('https://discordapp.com/oauth2/authorize?&client_id=600528351706218525&scope=bot&permissions=8')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'Ainvite')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Click Me To Invite Me Into Your Server')
      .setDescription('Click Messege Above')
      .setTimestamp()
      .setURL('https://discordapp.com/oauth2/authorize?&client_id=600528351706218525&scope=bot&permissions=8')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'aINVITE')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Click Me To Invite Me Into Your Server')
      .setDescription('Click Messege Above')
      .setTimestamp()
      .setURL('https://discordapp.com/oauth2/authorize?&client_id=600528351706218525&scope=bot&permissions=8')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'AINVITE')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Click Me To Invite Me Into Your Server')
      .setDescription('Click Messege Above')
      .setTimestamp()
      .setURL('https://discordapp.com/oauth2/authorize?&client_id=600528351706218525&scope=bot&permissions=8')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'invite')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Click Me To Invite Me Into Your Server')
      .setDescription('Click Messege Above')
      .setTimestamp()
      .setURL('https://discordapp.com/oauth2/authorize?&client_id=600528351706218525&scope=bot&permissions=8')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'Invite')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Click Me To Invite Me Into Your Server')
      .setDescription('Click Messege Above')
      .setTimestamp()
      .setURL('https://discordapp.com/oauth2/authorize?&client_id=600528351706218525&scope=bot&permissions=8')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'INVITE')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Click Me To Invite Me Into Your Server')
      .setDescription('Click Messege Above')
      .setTimestamp()
      .setURL('https://discordapp.com/oauth2/authorize?&client_id=600528351706218525&scope=bot&permissions=8')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'Where Ahmed Mode')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('Ahmed Mode Might Be AFK Sleeping Or Offline Or Maybe Busy Editing Video Or Anything Try To Contact Him Later If He Didnt Respond To This Messege')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'Where Is Ahmed Mode')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('Ahmed Mode Might Be AFK Sleeping Or Offline Or Maybe Busy Editing Video Or Anything Try To Contact Him Later If He Didnt Respond To This Messege')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'Where Ahmed')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('Ahmed Mode Might Be AFK Sleeping Or Offline Or Maybe Busy Editing Video Or Anything Try To Contact Him Later If He Didnt Respond To This Messege')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'Where Is Ahmed')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('Ahmed Mode Might Be AFK Sleeping Or Offline Or Maybe Busy Editing Video Or Anything Try To Contact Him Later If He Didnt Respond To This Messege')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'where is Ahmed Mode')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('Ahmed Mode Might Be AFK Sleeping Or Offline Or Maybe Busy Editing Video Or Anything Try To Contact Him Later If He Didnt Respond To This Messege')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'where is ahmed mode')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('Ahmed Mode Might Be AFK Sleeping Or Offline Or Maybe Busy Editing Video Or Anything Try To Contact Him Later If He Didnt Respond To This Messege')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'where is ahmed')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('Ahmed Mode Might Be AFK Sleeping Or Offline Or Maybe Busy Editing Video Or Anything Try To Contact Him Later If He Didnt Respond To This Messege')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'Where is Ahmed')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('Ahmed Mode Might Be AFK Sleeping Or Offline Or Maybe Busy Editing Video Or Anything Try To Contact Him Later If He Didnt Respond To This Messege')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'Where is Ahmed Mode')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('Ahmed Mode Might Be AFK Sleeping Or Offline Or Maybe Busy Editing Video Or Anything Try To Contact Him Later If He Didnt Respond To This Messege')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if(message.content == 'ahmed')
    {
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0303ff')
      .setTitle('Ahmed Mode Bot')
      .setDescription('Ahmed Mode Might Be AFK Sleeping Or Offline Or Maybe Busy Editing Video Or Anything Try To Contact Him Later If He Didnt Respond To This Messege')
      .setTimestamp()
      .setURL('https://www.YouTube.com/AhmedMode')
      .setFooter(`ahelp command - ${message.author.username}`)
      message.channel.send(helpEmbed)
            .then(msg => {
    msg.delete(30000)})
    }
  
  if (message.content.startsWith("Help"))
    {
  message.channel.send("First Say ahelp for all the commands Support Us By Subscribing To Our Channel And Watching The Videos And Leave A Like All Of That Is Appreciated! https://www.YouTube.com/AhmedMode")
      .then(msg => {
    msg.delete(30000)})
    };
  
  if (message.content.startsWith("help"))
    {
  message.channel.send("First Say ahelp for all the commands Support Us By Subscribing To Our Channel And Watching The Videos And Leave A Like All Of That Is Appreciated! https://www.YouTube.com/AhmedMode")
      .then(msg => {
    msg.delete(30000)})
    };
  
  if (message.content.startsWith("HELP"))
    {
  message.channel.send("First Say ahelp for all the commands Support Us By Subscribing To Our Channel And Watching The Videos And Leave A Like All Of That Is Appreciated! https://www.YouTube.com/AhmedMode")
      .then(msg => {
    msg.delete(30000)})
    };
  
  if (message.content.startsWith("Fuck"))
    {
  message.channel.send("You")
      .then(msg => {
    msg.delete(30000)})
    };
  
  if (message.content.startsWith("fuck"))
    {
  message.channel.send("You")
      .then(msg => {
    msg.delete(30000)})
    };
  
  if (message.content.startsWith("No u"))
    {
  message.channel.send("No yours haha")
      .then(msg => {
    msg.delete(30000)})
    };
  
  if (message.content.startsWith("no u"))
    {
  message.channel.send("No you ha")
      .then(msg => {
    msg.delete(30000)})
    };
  
  if (message.content.startsWith("No U"))
    {
  message.channel.send("No u hahahas")
      .then(msg => {
    msg.delete(30000)})
    };
  
  if (message.content.startsWith("Ahmed Mode New Slap Video"))
    {
  message.channel.send("@everyone **UPLOADED NEW VIDEO OR VIDEOS ON __AHMED MODE__ GO CHECK IT OUT AT OUR CHANNEL ENJOY LEAVE A LIKE AND SUB AND BELL AND SHARE FOR MORE!!** :purple_heart: :thumbsup: :smile: ")
    };
  
  if (message.content.startsWith("ahmed mode new slap video"))
    {
  message.channel.send("@everyone **UPLOADED NEW VIDEO OR VIDEOS ON __AHMED MODE__ GO CHECK IT OUT AT OUR CHANNEL ENJOY LEAVE A LIKE AND SUB AND BELL AND SHARE FOR MORE!!** :purple_heart: :thumbsup: :smile: ")
    };
  
  if (message.content.startsWith("MEGAS LINK"))
    {
  message.channel.send("@everyone **Mega Direct Link Is __CHANGED__ Go To Ahmed Mode Channel To Get The New Latest Link!** https://www.YouTube.com/AhmedMode  :purple_heart: :thumbsup: :smile: ")
    };
  
  if(message.content == 'aping')
    {
 const pingEmbed = new Discord.RichEmbed()
  message.channel.send('Ping?')
    .then(m => m.edit(
 pingEmbed.setTitle('Ping')
 .addField('⏱ round trip',`${m.createdTimestamp - message.createdTimestamp}ms`)
 .addField('💓 hearbeat', `${Math.round(client.ping)} ms`)
 .setColor('#0303ff')
))};
})
client.on('ready', function(){
    client.user.setActivity("ahelp | By Ahmed Mode", {type: "STREAMING", url: "https://www.twitch.tv/ahmedmodeyt"});
            //name: 'ahelp for link',
           // type: "STREAMING",
         //   url: "https://youtube.com/AhmedMode"

  
})
  //can't it be streaming? yhk WAIT caps

client.music = require("discord.js-musicbot-addon");
client.music.start(client, {
  youtubeKey: "AIzaSyA79Lb5MeVSCXcKCLBUUB_nzQS24ZYZ8rQ",
  botPrefix: 'a',
  messageHelp: true
});

client.login(config.token);
