const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('** 💋 Kimi öpeceğini yazmalısın 💋**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + ", " + message.author.username + ' 💋 Seni Öptü 💋 !**')
	.setImage(`https://media.discordapp.net/attachments/606901932438847509/619886203100987397/6b794937-6838-4754-be20-2e760e3828c6.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tekme"],
  permLevel: 0
};

exports.help = {
  name: 'öp',
  description: 'İstediğiniz Kişiyi öpersiniz.',
  usage: 'öp'
};