let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
  
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

        
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`).setColor(hata))
  
  let kisim = await db.fetch(`kisim.${message.guild.id}`)
  if(!kisim) return message.channel.send("Kayıt İsim Zorunluluğu Aktif Olmadığı İçin Yapamıyorum! Adamı İsimsiz Kayıt Ediyorsun")
  let yazi = args.slice(0).join(' ')
      if(!yazi) return message.channel.send(new Discord.MessageEmbed().setDescription(`
      Selam, Kayıt İsim Düzenini Ayarlayabilmek İçin Seçenek Belirtmen Gerek Örnekler Aşşağıda:
      
      \`${prefix}k-isim-düzen {isim}\`
      \`${prefix}k-isim-düzen kapat\`
      **Ve Sizin Belirttiğiniz Başka İsimler**
      
      Değişkenler:
      
      {isim} {yas}
      **(Kayıt ederken Kayıt Sorumlusu İsim Yazmaz ise değiştirilmez)**

      Bu Seçenekleri Kullanabilirsiniz.`).setColor(hata))
if(args[0] == 'kapat') {
        if(!db.has(`kisimdüzenisc.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`${ayarlar.hata2} | Kayıt İsim Düzen sistemi zaten kapalı!`))
  db.delete(`kisimdüzenisc.${message.guild.id}`, yazi)
    message.channel.send({embed: {color: ayarlar.oldu, description: `${ayarlar.oldu2} | İsim Düzeni Başarıyla Sıfırlandı`}})

return
}
  
  
      if(db.has(`kisimdüzenisc.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`${ayarlar.hata2} | Kayıt İsim Düzen sistemi zaten açık!`))

  db.set(`kisimdüzenisc.${message.guild.id}`, yazi)

  message.channel.send({embed: {color: ayarlar.oldu, description: `${ayarlar.oldu2} | İsim Düzeni \`${yazi}\` Olarak ayarlandı. Kayıt olanlar bu şekilde ismi düzenlenecek.

**(Kayıt ederken Kayıt Sorumlusu İsim Yazmaz ise değiştirilmez)**`}})
  return
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k-isim-düzen", "kayıtisimdüzen"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıt-isim-düzen'
};
