const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  message.react('676049276689711138');
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Kullanıcı Komutları:**", `?shard = botun shard istatistiğini gösterir.\n?yılbaşı = Yılbaşına kaç gün kaldığını gösterir\n?roblox = istediğiniz roblox hesabının istatiğine bakarsınız.\n?çeviri = ingilizce kelimeyi türkçeye çevirir.\n?report = istediğiniz kullanııyı reportlarsınız \n?bilgi = bot hakkında bilgi alırsınız\n?ping = Botun pingini gösterir. \n?havadurumu = belirttiğiniz şehirin hava durumunu atar\n?katıl = sizin olduğunuz sesli kanala katılır\n ?ailemiz = Botun hangi sunucularda olduğunu gösterir \n?avatarım = Avatarınınızı Gösterir. \n?yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \n?sunucuresmi = BOT Sunucunun Resmini Atar. \n?sunucubilgi = BOT Sunucu Hakkında Bilgi Verir.\n?youtube = youtube videolarına bakarsınız.\n?kullanıcı-bilgi = Sizin Hakkınızda Bilgi Verir. `)
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
  name: 'kullanıcı',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
