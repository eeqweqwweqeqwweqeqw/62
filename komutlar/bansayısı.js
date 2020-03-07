const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send("<:hayr:668070221667368960> Bu komutu kullanabilmen için `Yönetici` yetkisine sahip olmalısın.");
 let guild = message.guild;

    guild.fetchBans()
        .then(bans => message.channel.send(`Sunucunuzda ${bans.size} banlanmış üye bulunmakta`))
        .catch(console.error);

}

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: "bansayısı",
    description: "Sunucudan banlanan kişilerin sayısını gösterir",
    usage: "bansayısı"
  };