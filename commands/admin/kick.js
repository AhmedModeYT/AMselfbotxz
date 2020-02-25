const Commando = require('discord.js-commando');

class BanCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'kick',
            group: 'admin',
            memberName: 'kick',
            description: 'Kicks the mentioned user.'
        });
    }

    async run(message, args)
    {
        let kickedUser = message.guild.member(message.mentions.users.first());
        if(!kickedUser)
        {
            message.channel.send("sorry, i couldn't find that user");
            return;
        }
        if(!message.member.hasPermission("KICK_MEMBERS"))
        {
            message.channel.send("You don't have the permissions for that");
            return;
        }
        let words = args.split(' ');
        let reason = words.slice(1).join(' ');
        message.guild.member(kickedUser).kick(reason)
      .then(message.channel.send('kicked'));
    }
}

module.exports = BanCommand;