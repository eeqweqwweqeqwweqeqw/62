const Discord = require('discord.js');


exports.run = (client, message, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send("<a:hayr:676049254388858880> Bu komutu kullanabilmek için `Yönetici` iznine sahip olmalısın!");
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut giriişi').setDescription('Gerekli Kanallar Kurulsun mu?.').setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 40000,
errors: ['time'],
})
.then((collected) => {
       message.guild.channels.forEach(function(kan) {
       message.guild.roles.forEach(function(rol) {
                 kan.delete()
                 rol.delete()
       })}) 

  message.guild.channels.map(c => c.delete())
  message.guild.roles.forEach(sil => {sil.delete()});    
  message.guild.channels.map(c => c.delete())
  message.guild.roles.forEach(sil => {sil.delete()});   
  message.guild.channels.map(c => c.delete())
  message.guild.roles.forEach(sil => {sil.delete()});   

  
  message.guild.owner.send('<a:tik:676049276689711138> Başarıyla Sunucu Kurulumu Başlamıştır.')
  
  
  message.guild.createChannel('●▬▬▬▬๑「📣」๑▬▬▬▬▬●', 'category', [{
       id: message.guild.id,
     }]);

  message.guild.createChannel(`「📚」ʀᴜʟᴇs`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「📣」๑▬▬▬▬▬●")))
  ////////////////////////////////
  message.guild.createChannel(`「📣」ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛs`, 'text')
 .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「📣」๑▬▬▬▬▬●")))
 ////////////////////////////////////////
  message.guild.createChannel(`「🌍」ᴘᴀʀᴛɴᴇʀ`, 'text')

    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「📣」๑▬▬▬▬▬●")))
     

     //////////////////////////////////////////
  
  
  
  ///////////////////////////////////////////////////////////////
  message.guild.createChannel('●▬▬▬▬๑「🌟」๑▬▬▬▬▬●', 'category', [{
       id: message.guild.id,
     }]);

  message.guild.createChannel(`「💬」ᴄʜᴀᴛ`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌟」๑▬▬▬▬▬●")))
  ////////////////////////////////
   message.guild.createChannel(`「🔮」ʙᴏᴛ-ᴄᴏᴍᴍᴀɴᴅ`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌟」๑▬▬▬▬▬●")))
  ////////////////////////////////
   message.guild.createChannel(`「📷」ɢᴀʟʟᴇʀʏ`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌟」๑▬▬▬▬▬●")))
  ////////////////////////////////
   message.guild.createChannel(`「📥」ɪɴᴄᴏᴍɪɴɢ-ᴏᴜᴛɢᴏɪɴɢ`, 'text')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌟」๑▬▬▬▬▬●")))
  ////////////////////////////////
       
  
  
  /////////////////////////////////////////////
  message.guild.createChannel('●▬▬▬▬๑「🏆」๑▬▬▬▬▬●', 'category', [{
       id: message.guild.id,
     }]);

   message.guild.createChannel(`「🏆」ᴄʜᴀᴛ`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🏆」๑▬▬▬▬▬●")))
  ////////////////////////////////
    message.guild.createChannel(`「🏆」ᴄʜᴀᴛ`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🏆」๑▬▬▬▬▬●")))
  ////////////////////////////////
    message.guild.createChannel(`「🏆」ᴄʜᴀᴛ`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🏆」๑▬▬▬▬▬●")))
  ////////////////////////////////
  
  
  
  
   /////////////////////////////////////////////
  message.guild.createChannel('●▬▬▬▬๑「🎵」๑▬▬▬▬▬●', 'category', [{
       id: message.guild.id,
     }]);

   message.guild.createChannel(`「🎵」ᴍᴜsɪᴄ`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🎵」๑▬▬▬▬▬●")))
  ////////////////////////////////
    message.guild.createChannel(`「🎵」ᴍᴜsɪᴄ`, 'voice') //sa geldim ben aşkım :)
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🎵」๑▬▬▬▬▬●")))
  ////////////////////////////////
    message.guild.createChannel(`「🎵」ᴍᴜsɪᴄ`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🎵」๑▬▬▬▬▬●")))
  ////////////////////////////////
 
 
  
   /////////////////////////////////////////////
  message.guild.createChannel('●▬▬▬▬๑「🌙」๑▬▬▬▬▬●', 'category', [{
       id: message.guild.id,
     }]);

   message.guild.createChannel(`「🌙」ᴀғᴋ`, 'voice')
     
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "●▬▬▬▬๑「🌙」๑▬▬▬▬▬●")))
  ////////////////////////////////

  message.guild.createRole({
        name: `「👑」Kurucu`,
        color: "RED", 
        hoist: true,
        permissions: [
            "ADMINISTRATOR",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS",
            "BAN_MEMBERS",
        ]
    }).then(kurucurol => {
    message.guild.createRole({
        name: `「🌠」Admin`,
        color: "BLUE",
        hoist: true,
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
        }).then(adminrol => {
    message.guild.createRole({
        name: `「🌠」мσdєяαтöя `,
        color: "GREEN" ,
        hoist: true,
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
        }).then(modrol => {
    message.guild.createRole({
        name: `「💋」Bayan `,
        color: '#00ffff',
        hoist: true
        }).then(destekrol => {
    message.guild.createRole({
        name: ` 「👦🏼」Erkek`,
        color: "#000000" ,
        hoist: true
        }).then(özelrol => {
    message.guild.createRole({
        hoist: true,
        name: `「🎭」Bot `,
        color: "GREEN" 

    })})})})})})
 });
});
};

exports.conf = {  
  enabled: true,
  guildOnly: false,
  aliases: ['hazırsunucu'],
  permLevel: 2
};

exports.help = {
  name: 'sunucu-kur',
  description: 'Bot İçin gerekli kanlları kurar.',
  usage: 'sunucu-kur'
};
