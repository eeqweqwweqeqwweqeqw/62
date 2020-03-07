const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  message.react('668063587205513257');
  var errembed = new Discord.RichEmbed()
    .setColor("RANDOM")
  .setFooter(`LordBot Sayaç Sistemi`, client.user.avatarURL)
  
    .setAuthor(`LordBot`, client.user.avatarURL)
    .addField("**__Lord Sayaç Sistemi__**","Sunucunuzda Yeni Üyeler Giriş Yapınca Belirli Bir Kanala Mesaj Atar.")
  .addField("**Sayaç Sistemi**","Sunucunuzda Bu Ozelliği Açmak Istiyosanız **?sayaç <istediğiniz sayı> #kanal** şeklinde yazmaniz yeterlidir.Sıfırlamak için **?sayaç sıfırla** yazabilirsiniz.")
     message.channel.send(errembed);
}

exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: [],
        permLevel: 3,
        kategori: "moderasyon"
}
 
exports.help = {
        name: 'sayaçsistemi',
        description: 'Sayacı ayarlar.',
        usage: 'sayaç [sayı/sıfırla] [kanal]'
}