let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
let kayıty = await db.fetch(`kayıty.${message.guild.id}`)
if(!kayıty) return message.channel.send("Kayıt Yetkilisini Hemen Aç Ve Öyle Dene!")
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`).setColor(hata))
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription(`
Selam, Kayıtta Destek Ekibi Etiketlenmesi İçin Lütfen Bir Seçenek Belirt Seçenekler Aşşağıda:

\`${prefix}k-destek evet\`
\`${prefix}k-destek hayır\`
Bu Seçenekleri Kullanabilirsiniz.`).setColor(hata))
  if(args[0] == 'evet') {
    if(db.has(`destekekibi.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(` ${ayarlar.hata2} | Zaten kayıt Destek sistemi açık!`))
    db.set(`destekekibi.${message.guild.id}`, 'açık')
    message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Artık Kullanıcı Sunucuya Girince Otomatik Destek Ekibi Etiketlenecek.`).setColor(oldu))
    
    return
  } 
  if(args[0] == 'hayır') {
    if(!db.has(`destekekibi.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`${ayarlar.hata2} | Kayıt Destek sistemi zaten kapalı!`))
    db.delete(`destekekibi.${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Artık Kullanıcı Sunucuya Girince Otomatik Destek Ekibi Etiketlenmeyecek`).setColor(oldu))
    return
  }
    
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k-destek", "kayıtdestek"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıt-destek'
};
