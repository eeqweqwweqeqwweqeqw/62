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
  .addField("**Yetkili Komutları**", `?küfür aç/kapat = küfür edenlerin mesajını engeller.\n?reklamkick aç/kapat = reklam yapanları 3 kez uyarıdan sonra reklam yapmaya devam ederse kicler.\n?reklam aç/kapat = Sunucunuzda reklamları engeller.\n?sayaçsistemi = Sayaç komutlarını gösterir.\n?anti-spam aç/kapat = Spam yapan kişileri susturur.\n?güvenlik = Güvenlik resimleri yollar(beta).\n?reklamtaraması = Oynuyor yerine reklam koyanları gösterir.\n?kilit = Kanalı belirtilen süre bitene kadar kilitler.\n?bansayısı = Banlanan kişi sayısını gösterir.\n?logayarla = Cezalandırdıklarınızı belirlediğiniz kanala atar.\n?ban = İstediğiniz Kişiyi Sunucudan Banlar.\n?hazırsunucu = Sunucuyu Hazırlar.\n?kick = İstediğiniz Kişiyi Sunucudan Atar.\n?oylama = Oylama Açar.\n?duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/BAĞLANTI) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote) **|** [Web Sitesi](https://app.site123.com/?w=2933486)`)
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
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};