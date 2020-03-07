const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const müzik = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x8e44ad)
  .addField(`Müzik`, '?çal [şarkı adı]: İstediğin şarkıyı çalar.\n?durdur: Müziği durdurur.\n?devam: Müziği devam ettirir.\n?sıra: Kuyruğu söyler\n?geç: Geçerli çalınan müziği geçer\n?ses: Belirlediğiniz değerde sesi açar.')
  .setFooter(`LordBot - Tüm hakları saklıdır.`, client.user.avatarURL)
  console.log("Oralet Bildirme: /müzik komutu " + message.author.username + " kanalında kullanıldı.")
  return message.channel.sendEmbed(müzik);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['müzik'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'müzik',
    description: 'müzik',
    usage: 'müzik'
  };