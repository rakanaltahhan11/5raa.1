exports.run = async (client, msg, args, lang) => {
const config = require("../config.json")
const devs = config.devs;
        if (!devs.includes(msg.author.id)) return;

	//await msg.channel.send("Done!");
  
  await msg.react("✅")

	process.exit(42);
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	shortDescription: 'General',
	aliases: ['reboot'],
	userpermissions: [],
	dashboardsettings: true
};
exports.help = {
	name: 'restart',
	description: 'Restarts the bot',
	usage: 'restart',
	example: ['restart'],
	category: 'botowner',
	botpermissions: ['SEND_MESSAGES']
};