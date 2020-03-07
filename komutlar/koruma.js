const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('')

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  message.react('676049276689711138');
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Koruma Komutları**", `?bot-koruma #kanal = Sunucunuza giren botları otomatik atar.`)
  .setFooter('Yapımcım: δ Lord Bey#3178')
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
  guildOnly: true,
  aliases: ['y'],
  permLevel: 0
};

exports.help = {
  name: 'koruma',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};