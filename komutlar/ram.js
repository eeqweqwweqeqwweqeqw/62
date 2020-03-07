const Discord = require("discord.js");
const moment = require("moment");
//require("moment-duration-format");

module.exports.run = async (bot, message, args) => {
    


    let msgping1 = new Date();

    let botping = new Date() - message.createdAt;

    let msgping2 = new Date() - msgping1;

    let pingembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("LordBot Ram kullanımı")
        .addField(`💻 RAM Kullanımım:`,`512 MB | ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/MB`)
        .setFooter(`LordBot RAM Komutu`);

        
    return message.channel.send(pingembed);
        

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ramkullanımı", "ram"],
  permLevel: 0
};

exports.help = {
  name: 'ram',
  description: 'Botun rami hakkında bilgi gösterir.',
  usage: 'ram'
};