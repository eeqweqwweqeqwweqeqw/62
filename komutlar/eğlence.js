const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  message.react('676049276689711138');
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence Komutları:**", `?token = Botun tokenini atar ve bot sizin olur.\n?caps = Komik gif&foto atar.\n?vine = komik videolar atar.\n?banned = Dene ve Gör! \n ?balıktut = Balık Tutar  \n ?urfagonder = kullanıcı bilgilerini gösterir :D  \n?herkesebendençay = Herkese Çay Alırsınız. \n?koş = Koşarsınız.\n?çayiç = Çay İçersiniz. \n?çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \n?çayaşekerat = Çaya Şeker Atarsınız. \n?yumruh-at = Yumruk Atarsınız.\n?atasözü = atasözü atar \n?normendersözü = mekanın sahibi şarkısındaki bazı sözleri atar \n?bayrak = bayrak yollar \n?sorusor = bota soru sorarsınız`)
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
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};

