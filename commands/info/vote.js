const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
	msg.delete();
	msg.channel.send(
		"Coming soon"
	);
};

module.exports.help = {
	name: "vote",
	description:
		"",
	usage: "d!vote",
	accessableby: "Everyone",
	aliases: []
};
