let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`).setColor(hata))
  
  if(!args[0]) return message.channel.send({embed: {color: hata, description: `
  Selam, Ekstra Rolünü Ayarlamak İçin Aşşağıda Verdiğimiz Seçenekleri Kullan!:
  
  \`${prefix}k-ek-rol @rol\`
  \`${prefix}k-ek-rol kapat\`
  Bu Seçenekleri Kullanabilirsiniz`}})
    
  
  
  if(args[0] == 'kapat'){
        if(!db.has(`kayıteks.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Sistem Zaten Kapalı!`).setColor(hata))

      db.delete(`kayıteks.${message.guild.id}`)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Kayıt Ekstra rolü başarıyla kapatıldı`).setColor(oldu))
    return
  }
  
  let type = message.mentions.roles.first()
  if(!type) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bir rol etiketlemelisin!`).setColor(hata))
  
      if(db.has(`kayıteks.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Sistem Zaten Açık!`).setColor(hata))

  db.set(`kayıteks.${message.guild.id}`, type.id)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Kayıt Ekstra rolü başarıyla ${type} olarak ayarlandı!`).setColor(oldu))
  return
  
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k-ek-rol", "kayıtekstrarol"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıt-ek-rol'
};
