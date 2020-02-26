const Discord = require("discord.js")

var prefix = ".";




module.exports.run = async (client, message, args, lang) => {
  if(!message.content.includes(prefix)) return;
        var color = new Discord.RichEmbed().setColor('#000000').setColor('#36393e');
        function err(message, args) {
        	var embed = new Discord.RichEmbed()
        	.setColor(color.color)
        	.setAuthor(args, "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Feedbin-Icon-error.svg/1000px-Feedbin-Icon-error.svg.png");
        	message.channel.sendEmbed(embed);
        }
        if (message.channel.type !== "text") return message.reply("Sorry");
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return err(message, "You Don't Have Access To Do This Command");
        if (!args[0]) args[0] = 100;
        var count = parseInt(args) + 1;
        if (isNaN(count)) return err(message, `** You Have To Type Number**`);
        if (count > 100) count = 100;
        message.channel.bulkDelete(count).then(msgs => {
            var embed = new Discord.RichEmbed()
            .setColor(color.color)
            .setDescription(`** Done ** | I have Deleted ${msgs.size - 1} Messages ...`)
            .setFooter(`By Request of ${message.author.username}`);
            message.channel.sendEmbed(embed).then(msg => msg.delete(1000));
        });
};

exports.help = {
    name: "clear"
};