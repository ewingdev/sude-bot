let Discord = require("discord.js");
let db = require("quick.db")
let { oldu, hata, hata1,  bot } = require("../ayarlar.json")
let ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
let user = message.mentions.members.first() || message.author
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
        let kmesajg = await db.fetch(`kmesajg.${message.guild.id}`)
                let kmesajr = await db.fetch(`kmesajr.${message.guild.id}`)

let erkek = await db.fetch(`kayıte.${message.guild.id}`)
let kadın = await db.fetch(`kayıtkadın.${message.guild.id}`)
    let kayıtalınacakrol = await db.fetch(`kayıtalınacakrol.${message.guild.id}`)
    let kayıty = await db.fetch(`kayıty.${message.guild.id}`)
    let kmesajc = await db.fetch(`kmesajc.${message.guild.id}`)
        let log = await db.fetch(`logkayıt.${message.guild.id}`)
    let kmesajembed = await db.fetch(`kmesajembed.${message.guild.id}`)

if(args[0] == 'kayıt') {
  

let embed = new Discord.MessageEmbed()
embed.setAuthor('Sude Kayıt Botu!',message.author.avatarURL())
embed.setFooter("Daha Fazlası İçin " + prefix + "yardım kayıt")
  embed.setColor(oldu)
  if(erkek && message.guild.roles.cache.get(erkek).position >= message.guild.member(client.user).roles.highest.position) {
    embed.addField(`${client.emojis.cache.get('953366151914737714')} UYARI`,`<@&${erkek}>, Rolü Benim En Üst Rolümden Üstte Lütfen Rolümü bu rolün Üstüne Çekiniz`)
  }
    if(kadın && message.guild.roles.cache.get(kadın).position >= message.guild.member(client.user).roles.highest.position) {
    embed.addField(`${client.emojis.cache.get('953366151914737714')} UYARI`,`<@&${kadın}>, Rolü Benim En Üst Rolümden Üstte Lütfen Rolümü bu rolün Üstüne Çekiniz`)
  }
  if(!erkek) {
    embed.addField(`${client.emojis.cache.get('953366151914737714')} UYARI`,`${prefix}k-erkek-rol @rol Eğer Kayıt Erkek Rolü **Ayarlanmazsa** Kayıt Asla **Çalışmaz**`)
  }
  if(!kadın) {
    embed.addField(`${client.emojis.cache.get('953366151914737714')} UYARI`,`${prefix}k-kadın-rol @rol Eğer Kayıt Kadın Rolü **Ayarlanmazsa** Kayıt Asla **Çalışmaz**`)
  }
   if(!kayıtalınacakrol) {
    embed.addField(`${client.emojis.cache.get('953366151914737714')} UYARI`,`${prefix}k-alınacak-rol @rol Eğer Kayıt Kadın Rolü **Ayarlanmazsa** Kayıt Asla **Çalışmaz**`)
  }
    if(!kayıty) {
    embed.addField(`${client.emojis.cache.get('953366151914737714')} UYARI`,`${prefix}k-y-rol @rol Eğer Kayıt Yetkili Rolü **Ayarlanmazsa** Kayıt Asla **Çalışmaz**`)
  }
   if(!log) {
    embed.addField(`${client.emojis.cache.get('953366151914737714')} UYARI`,`${prefix}k-log #kanal Eğer Kayıt Logu **Ayarlanmazsa** Kayıt Asla **Çalışmaz**`)
  }
  
  if(!kmesajc) {
    embed.addField(`${client.emojis.cache.get('953366151914737714')} UYARI`,`${prefix}k-mesaj ayarla kayıtumesajı Eğer Kayıt Mesajı **Ayarlanmazsa** Kayıt Asla **Çalışmaz**`)
  }
  if(!kmesajembed) {
        embed.addField(`${client.emojis.cache.get('953366151914737714')} UYARI`,`${prefix}k-mesaj-embed <evet/hayır> Bu Seçeneği Kullanarak Kayıt Mesajı Embedli Yapabilirsiniz. Zorunlu değil!`)

  }  
  if(!kmesajg) {
        embed.addField(`${client.emojis.cache.get('953366151914737714')} UYARI`,`${prefix}k-mesaj gif giflink Bu Seçeneği Kullanarak Kayıt Mesajı Gifli Yapabilirsiniz. Zorunlu değil!`)

  }
    if(!kmesajr) {
        embed.addField(`${client.emojis.cache.get('953366151914737714')} UYARI`,`${prefix}k-mesaj renk #renkkodu Bu Seçeneği Kullanarak Kayıt Mesajı Renkli Yapabilirsiniz. Zorunlu değil!`)

  }
  
  
  
  
  
  
  
    if(kadın) {
    embed.addField(`${client.emojis.cache.get('953366151516282930')} BAŞARI`,`Kadın Rolü Açıkmış!`)
  }
   if(kayıtalınacakrol) {
    embed.addField(`${client.emojis.cache.get('953366151516282930')} BAŞARI`,`Kayıt Alınacak Rol Açıkmış!`)
  }
    if(kayıty) {
    embed.addField(`${client.emojis.cache.get('953366151516282930')} BAŞARI`,`Kayıt Yetkilisi Açıkmış!`)
  }
   if(log) {
    embed.addField(`${client.emojis.cache.get('953366151516282930')} BAŞARI`,`Kayıt Log Açıkmış!`)
  }
  
  if(kmesajc) {
    embed.addField(`${client.emojis.cache.get('953366151516282930')} BAŞARI`,`Kayıt Mesajı Açıkmış!`)
  }
  if(kmesajembed) {
        embed.addField(`${client.emojis.cache.get('953366151516282930')} BAŞARI`,`Kayıt Mesaj Embedi Açılmış!`)

  }  
  if(kmesajg) {
        embed.addField(`${client.emojis.cache.get('953366151516282930')} BAŞARI`,`Kayıt Mesaj Gifi Açıkmış!`)

  }
    if(kmesajr) {
        embed.addField(`${client.emojis.cache.get('953366151516282930')} BAŞARI`,`Kayıt Mesaj Rengi Açıkmış!`)

  }
  
 message.channel.send(embed) 
}
}



module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kontrol"],
  permLevel: 0
};

module.exports.help = {
  name: 'kontrol'
};
