const Discord = require('discord.js')
const db = require('quick.db')
const a = require('../ayarlar.json')


exports.run = async (client, message, args) => {
if(args[0] === "kapat") {
  
db.delete(`hayvanlarıkoru${message.guild.id}`)
  
  const umutbey = new Discord.RichEmbed()
  .setDescription(`Giriş Çıkış başarıyla kapatıldı!`)
  .setColor("GOLD")
  .setFooter(`Hoşgeldin Sistemi`, client.user.avatarURL)
 
  message.channel.send(umutbey)
} 
else {
  

  let umutbey = message.mentions.channels.first();
  
  const codebymlynstax = new Discord.RichEmbed()
  .setTitle(`**\`GirişÇıkış Bilgi;\`**`)
  .setDescription(`** ** \n**Ayarlamak İçin**: \`${a.prefix}hoşgeldin #kanal\`\n\n **Kapatmak İçin:** \`${a.prefix}hoşgeldin kapat\``)
  .setColor("GOLD")
  .setFooter(`Hoşgeldin Sistemi`, client.user.avatarURL)
  
  if(!umutbey) return message.channel.send(codebymlynstax)
  

  db.set(`hayvanlarıkoru${message.guild.id}`, umutbey.id)
  
  const codeming = new Discord.RichEmbed()
  .setDescription(`Giriş çıkış mesajlarının atılacağı kanal **${umutbey}** olarak ayarlandı!`)
  .setColor("GOLD")
  .setFooter(`Hoşgeldin Sistemi`, client.user.avatarURL)
  message.channel.send(codeming)
  
  
}}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hg-bb-ayarla', 'gelen-giden'],
  permLevel: 3,
};

exports.help = {
  name: 'hoşgeldin',  
  description: 'umut dirlik',
  usage: 'Cod EMİNG !'
};