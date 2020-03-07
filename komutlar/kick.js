const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("<a:hayr:676049254388858880> Bu komutu kullanabilmek için `Üyeleri Yasakla` iznine sahip olmalısın!");
    let reason = args.slice(1).join(' ')
    if (!args[0]) return message.channel.send("Kimi sunucudan kicklemek **istersiniz?**")
    let user = message.mentions.users.first() || bot.users.get(args[0]) || message.guild.members.find(u => u.user.username.toLowerCase().includes(args[0].toLowerCase())).user

    if (!user) return message.channel.send(`<a:hayr:676049254388858880> Etiketlediğin kullanıcıyı sunucuda bulamadım.`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`<a:hayr:676049254388858880> Etiketlediğin kullanıcıyı sunucuda bulamadım.`)
    if (member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:hayr:676049254388858880> Kendi yetkimin üstündeki kişileri yasaklayamam.`)
    if (!reason) reason = 'neden belirtilmemiş'
  
    message.channel.send(`\`${user.tag}\` adlı kişi sunucudan atılacak? Kabul ediyorsanız **evet / e** etmiyorsanız **hayır / h** yazınız.`)
        let uwu = false;
            while (!uwu) {
                const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
                const choice = response.first().content
                if (choice == 'hayır' || choice == 'h') return message.channel.send('İşlem başarıyla **sonlandırıldı.**')
                if (choice !== 'evet' && choice !== 'e') {
                message.channel.send('Lütfen sadece **evet** veya **hayır** ile cevap verin.')
                }
                if (choice == 'evet' || choice == 'e') uwu = true
                }
                if (uwu) {
                try {
                await member.kick(reason + ` | Yetkili: ${message.author.tag} - ${message.author.id}`)
  
                message.channel.send(`<a:tik:676049276689711138> **${user.tag}** adlı kullanıcı **${message.author.tag}** adlı yetkili tarafından **${reason}** sebebiyle sunucudan atıldı.`)
                user.send(`**${message.guild.name}** adlı sunucudan **atıldınız**\n*Sebep:* \`\`\`${reason}\`\`\``)

                let embed = new Discord.RichEmbed()
                    .setColor('BLUE')
                    .setAuthor(`${user.username} adlı kişi atıldı!`, user.avatarURL||user.defaultAvatarURL)
                    .addField('Atılan Kullanıcı', `${user.tag}-[${user.id}]`, true)
                    .addField('Atan Yetkili', `${message.author.tag}-[${message.author.id}]`, true)
                    .addField('Atılma Nedeni', reason, true);
                let membermodChannel = await db.fetch(`membermodChannel_${message.guild.id}`)
                if (!message.guild.channels.get(membermodChannel)) return
                else message.guild.channels.get(membermodChannel).send(embed)
            } catch(e) {
            message.channel.send(':warning: Bir hata var!')
                  }
    } else return console.log('Hata var')
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  description: 'nblm',
  usage: 'ban'
};