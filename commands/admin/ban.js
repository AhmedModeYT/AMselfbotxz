const Commando = require('discord.js-commando');

class BanCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'ban',
            group: 'admin',
            memberName: 'ban',
            description: 'Bans the mentioned user.'
        });
    }

    async run(message, args)
    {
        let bannedUser = message.guild.member(message.mentions.users.first());
        if(!bannedUser)
        {
            message.channel.send("sorry, i couldn't find that user");
            return;
        }
        if(!message.member.hasPermission("BAN_MEMBERS"))
        {
            message.channel.send("You don't have the permissions for that");
            return;
        }
        let words = args.split(' ');
        let reason = words.slice(1).join(' ');
        message.guild.member(bannedUser).ban(reason)
      .then(message.channel.send('banned'));
    }
}

module.exports = BanCommand;