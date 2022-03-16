let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {

    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`).setColor(hata))
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription(`
Selam, Kayıt İsim Zorun Sistemini Kullanabilmek İçin Seçenek Belirtmen Gerek Örnekler Aşşağıda:

\`${prefix}k-isim-zorun evet\`
\`${prefix}k-isim-zorun hayır\`

Evet : Bir Kullanıcıyı Kayıt Ederken Zorunlu İsim Yaş İster
Hayır: Bir Kullanıcıyı Kayıt Ederken Zorunlu İsim Yaş İstemez
Bu Seçenekleri Kullanabilirsiniz.`).setColor(hata))
  
  if(args[0] == 'evet') {
    if(db.has(`kisim.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`${ayarlar.hata2} | Zaten kayıt embed sistemi açık!`))
    db.set(`kisim.${message.guild.id}`, 'açık')
    message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Kayıt İsim Zorunluluğu başarıyla **açıldı** `).setColor(oldu))
    
    return
  } 
  if(args[0] == 'hayır') {
    if(!db.has(`kisim.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`${ayarlar.hata2} | Kayıt embed sistemi zaten kapalı!`))
    db.delete(`kisim.${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Kayıt embed başarıyla **kapatıldı**`).setColor(oldu))
    return
  }
    
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k-isim-zorun", "kayıtisimzorun"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıt-isimzorun'
};
