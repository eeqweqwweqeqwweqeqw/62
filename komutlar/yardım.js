const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  message.react('676049276689711138');
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence Komutları**", `?eğlence = eğlence komutlarını atar.`)
  .addField("**Yetkili Komutları**", `?yetkili = yetkili komutlarını atar.`)
  .addField("**Kullanıcı Komutları**", `?kullanıcı = kullanıcı komutlarını atar.`)
  .addField("**Koruma Komutları**", `?koruma = koruma komutlarını atar.`)
  .addField("**Davet Linki**", " **?davet** ")
  .setFooter('Yapımcım : 々 TheLord#0565')
  .setFooter(`${message.author.tag} Tarafından istendi.`, message.author.displayAvatarURL)
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
