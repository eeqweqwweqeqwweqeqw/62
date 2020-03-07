const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
'**Norm Ender : Mekanın Sahibi Geri geldi.**',
'**Norm Ender : Bebeleri Pistten alalım.**',
'**Norm Ender : Keltoş Babana koş.**',
'**Norm Ender : Sabah yaptım krep krep.**',
'**Norm Ender : Bizde küvet yok, duşakabin.**',
'**Norm Ender : Sizin tayfa bitch bitch.**',
'**Norm Ender : Bu iş böyle Rolex, Range.**',
'**Norm Ender : La bebe koş, la bebe coş.**',
'**Norm Ender : Siz Windows, ben Macintosh.**',
'**Norm Ender : Oturan diyor "Mor minder**',
'**Norm Ender : Cihangirli heceler**'
];
var normendersözüver = Math.floor(Math.random()*Random.length);
const normendersözü = new Discord.RichEmbed()
.setDescription(`${Random[normendersözüver]}`)
.setColor(0xe2ff00)
.setTimestamp()
message.channel.send(normendersözü)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'normendersözü',
description: 'Rastgele Norm Ender sözleri atar',
usage: 'm!normendersözü'
};
