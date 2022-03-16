let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
  
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

        
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`).setColor(hata))
  
  if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription(`
  Selam, Kayıt Yetkili Rolünü Ayarlamak İçin Bir Seçenek Belirtmen Lazım Aşşağıda Örnekler Var:
  
  \`${prefix}k-y-rol @rol\`
  \`${prefix}k-y-rol kapat\`
  Bu Seçenekleri Kullanabilirsiniz`).setColor(hata))
    
  

  if(args[0] == 'kapat'){
    
    
       if(!db.has(`kayıty.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Kayıt Yetkili Rolü Zaten Kapalı!`).setColor(hata))

    db.delete(`kayıty.${message.guild.id}`)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Kayıt yetkili rolü başarıyla kapatıldı!`).setColor(oldu))
    return
  }
    let type = message.mentions.roles.first()
  if(!type) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bir rol etiketlemelisin!`).setColor(hata))
  
   if(db.has(`kayıty.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Kayıt Yetkili Rolü Zaten Açık!`).setColor(hata))
  db.set(`kayıty.${message.guild.id}`, type.id)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Kayıt yetkili rolü başarıyla ${type} olarak ayarlandı!`).setColor(oldu))
  return
  
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k-y-rol", "kayıtyetkilirol"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıt-yetkili-rol'
};
