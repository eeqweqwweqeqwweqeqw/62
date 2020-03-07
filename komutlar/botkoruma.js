const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  const botk = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor("Lord Bot Koruma Sistemi")
  .setFooter('LordBot', client.user.avatarURL)
  .setDescription("<a:tik:676049276689711138> Bot koruma başarıyla aktif edildi.Belirttiğiniz kanala bot girince mesaj atacak.")
  .setTimestamp()
  
var prefix = ayarlar.prefix;
  
if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: Bu işlemi gerçekleştirmem için "\`Yönetici\`" yetkisine sahip olmalıyım.`)   
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let mesaj = args.slice(0).join(' ')
  let botkoruma = db.fetch(`botkoruma_${message.guild.id}`)
  let botkorumalog = message.mentions.channels.first() 
  if(mesaj === "kapat") {
    if(botkoruma === undefined) {
      message.channel.send(`:x: Bu sunucuda bot koruma ayarlanmamış.`)
      return
    } 
    db.delete(`botkoruma_${message.guild.id}`)
    db.delete(`botkorumalog_${message.guild.id}`)
    message.channel.send(`:white_check_mark: Bot koruma başarıyla kapatıldı.`)
    return
  }
  
  if (!botkorumalog) return message.channel.send(`:x: Bot atıldığında bildirimin gideceği kanalı belirtmelisin. Örnek: \`${prefix}botkoruma <#kanal>\``)
  

  db.set(`botkorumalog_${message.guild.id}`, botkorumalog.id)
  
  message.channel.send(botk)
   
  
  };
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['botkoruma'],
    permLevel: 2
};
exports.help = {
    name: 'bot-koruma',
    description: 'Sunucuya giren botları otomatik olarak banlar.',
    usage: 'bot-koruma aç'
};