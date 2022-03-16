let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`).setColor(hata))
  if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription(`
  Bir Seçenek Belirtmen Gerekmekte Örnekler Hemen Aşşağıda:
  
  \`${prefix}k-oto-rol @rol\`
  \`${prefix}k-oto-rol kapat\`
  Bu Seçenekleri Kullanabilirsiniz.`).setColor(hata))

  
  if(args[0] == 'kapat') {
  
    if(!db.has(`otokayıt.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Sistem Zaten Kapalı!`).setColor(hata))

  db.delete(`otokayıt.${message.guild.id}`)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Kayıt oto rolü başarıyla kapatıldı!`).setColor(oldu))
  }
  
    let type = message.mentions.roles.first()
  if(!type) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bir rol etiketlemelisin!`).setColor(hata))
  
    if(db.has(`otokayıt.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Sistem Zaten Açık!`).setColor(hata))

  db.set(`otokayıt.${message.guild.id}`, type.id)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Kayıt oto rolü başarıyla ${type} olarak ayarlandı!`).setColor(oldu))
  return
  
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k-oto-rol", "kayıtotorol"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıt-oto-rol'
};
