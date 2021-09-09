const fetch = require("node-fetch");
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	const embed = new Discord.MessageEmbed()
		.setAuthor(`Invite Me to your server!`, client.user.displayAvatarURL())
		.setColor("#2A2A2A")
		.setDescription(
			`[Click Here (Recommand Permissions)](https://discord.com/api/oauth2/authorize?client_id=845710005139275817&permissions=2453139319&scope=bot)`
		)
		.setFooter(`©  ${client.user.username}`);
	message.channel.send(embed);
};

module.exports.help = {
	name: "invite",
	description: "This command is used for creating invite links.",
	usage: "d!invite",
	accessableby: "Members",
	aliases: []
};
