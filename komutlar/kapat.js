const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send("<:hayr:668070221667368960> Bu komutu kullanabilmen için `Yönetici` yetkisine sahip olmalısın.")
    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
    })
    message.react('676049276689711138');
    message.channel.send('Kanal başarıyla kapatıldı')

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['close'],
    permLevel: 3
}

exports.help = {
    name: 'kapat',
    description: 'Kanalı kapatır',
    usage: 'kapat'
}

