const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json')
  var request = require('request');

exports.run = (client, message, params) => {
   var request = require('request');

request('https://rec-nd-api.glitch.me/api/cresim', function (error, response, body) {
    if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
      var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
      .setDescription( `Resim Yüklenmediyse [buraya tıklayın!](${info.link}) `)
      .setImage(info.link);
        message.channel.send(embed); 
    }
});
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['caps'],
  permLevel: 0
};

exports.help = {
  name: 'kresim',
  description: 'Rastgele Komik GİF-Fotoğrafı',
  usage: 'rgif'
};