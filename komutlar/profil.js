 let Discord = require("discord.js");
let db = require("quick.db")
let { oldu, hata, bot } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
            let sayici = await db.fetch(`say.toplam.${message.author.id}.${message.guild.id}`)
            
     
   
      let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  let kayıtlı = await db.fetch(`say.kayıtlı.${message.author.id}.${message.guild.id}`)

  if(!kayıtlı || !kayıtlı) {
    let embed1 = new Discord.MessageEmbed()
    .setTitle("HATA!")
    .setDescription(`Kayıt Kaydın Zaten Yok!`)
    .setColor(ayarlar.hata)
    message.channel.send(embed1)
    
    return
  }



  let embed = new Discord.MessageEmbed()

  .addField(`**Kayıt Sayısı:** `, `\`${kayıtlı ? kayıtlı : 'Veri yok.'}\``)
    .addField(`**Toplam Kayıt Sayısı:** `, `\`${sayici ? sayici : 'Veri yok.'}\``)
  .setColor(oldu)
  .setTitle(`${bot} Profil Sistemi!`)
  message.channel.send(embed)
  return
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["profile"],
  permLevel: 0
};

module.exports.help = {
  name: 'profil'
};
