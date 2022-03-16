let Discord = require("discord.js");
const DBL = require("dblapi.js");
const hex = require('hex-color-regex')

let db = require("quick.db")
let { hata, oldu, bot } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
 
         let ayarlar = require("../ayarlar.json")

     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`).setColor(hata))

     

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
let user = message.mentions.members.first() || message.author

  
  if(args[0] == 'ayarla') {
    let mesaj = args.slice(1).join(' ')
    if(!mesaj) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`
    Bir Mesaj Belirt Örnek: \`${prefix}k-mesaj ayarla <mesaj> \` `))
    
    db.set(`kmesajc.${message.guild.id}`, mesaj)
  message.channel.send(new Discord.MessageEmbed().setColor(oldu).setDescription(`${ayarlar.oldu2} | Başarıyla Kayıt Mesajı Ayarlandı!`))
return
                                           }
if(args[0] == 'sıfırla') {
  db.delete(`kmesajc.${message.guild.id}`)
      db.delete(`kmesajg.${message.guild.id}`)
      db.delete(`kmesajembed.${message.guild.id}`)
        db.delete(`kmesajr.${message.guild.id}`)
  db.delete(`kmesaju.${message.guild.id}`)

  message.channel.send(new Discord.MessageEmbed().setColor(oldu).setDescription(`${ayarlar.oldu2} | Başarıyla Kayıt Mesajı Sıfırlandı!`))
  return
}
     
if(args[0] == 'gif') {
      var rex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i

  if(!db.has(`kmesajembed.${message.guild.id}`)) return message.channel.send({embed: {color: hata, description: `
  Kayıt Mesaj Embed Açık Değil! Hemen Aç Ve Öyle Dene`}})
    let mesaj = args.slice(1).join(' ')
    if(!mesaj) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`
    Bir Gif Belirt Örnek: \`${prefix}k-mesaj gif https://c.tenor.com/CoZU7A3vOywAAAAd/g%C3%BCzel-para-kanka-%C5%9Fafak-sezer.gif\`
    
    
    NOT: **Eğer Yanlış Gif Girerseniz Bot Gifi Atamaz** `))
        if(!rex.test(args[1]))return message.channel.send(`Bu Bir Link Değil`)

      db.set(`kmesajg.${message.guild.id}`, mesaj)
  message.channel.send(new Discord.MessageEmbed().setColor(oldu).setDescription(`${ayarlar.oldu2} | Başarıyla Kayıt Gifi Ayarlandı!`))
return
                                           }
    if(args[0] == 'renk') {
 
  if(!db.has(`kmesajembed.${message.guild.id}`)) return message.channel.send({embed: {color: hata, description: `
  Kayıt Mesaj Embed Açık Değil! Hemen Aç Ve Öyle Dene`}})
    let mesaj = args.slice(1).join(' ')
  
      
      if(mesaj > 7) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`
    Bir Gif Belirt Örnek: \`${prefix}k-mesaj renk #dd0707\`
    
    
    NOT: **Eğer Yanlış Renk Kodu Girerseniz Otomatik Siyah Renkte Olur** `))
        if(!hex().test(args[1])) return message.channel.send(new Discord.MessageEmbed().setColor(ayarlar.embedFalse).setDescription(' Lütfen Geçerli bir Renk Kodu Giriniz.'))

    if(!mesaj) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`
    Bir Renk Kodu Gireceksin En Fazla **7** Harf Olması Gerekecek! Örnek: \`${prefix}k-mesaj renk #dd0707\`
 `))
    
      db.set(`kmesajr.${message.guild.id}`, mesaj)

  message.channel.send(new Discord.MessageEmbed().setColor(oldu).setDescription(`${ayarlar.oldu2} | Başarıyla Kayıt Gifi Ayarlandı!`))
return
    }
               if(args[0] == 'başlık') {
       var rex = [
         'https://']

  if(!db.has(`kmesajembed.${message.guild.id}`)) return message.channel.send({embed: {color: hata, description: `
  Kayıt Mesaj Embed Açık Değil! Hemen Aç Ve Öyle Dene`}})
    let mesaj = args.slice(1).join(' ')


    if(!mesaj) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`
    Bir Başlık Belirt Örnek: \`${prefix}k-mesaj başlık Sqlite Kayıt Sistemi\`
 `))

      
      if(mesaj > 15) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`
    Bir Başlık Belirt Ve En Fazla **15 Harf Girebilirsiniz.** Örnek: \`${prefix}k-mesaj başlık Sqlite Kayıt Sistemi\`
    
    
    NOT: **Eğer Yanlış Girerseniz Gözükmez** `))
      db.set(`kmesajt.${message.guild.id}`, mesaj)

  message.channel.send(new Discord.MessageEmbed().setColor(oldu).setDescription(`${ayarlar.oldu2} | Başarıyla Kayıt Başlığı Ayarlandı!`))
return
                                           }
    
      if(args[0] == 'url') {
       var rex = [
         'https://']

  if(!db.has(`kmesajembed.${message.guild.id}`)) return message.channel.send({embed: {color: hata, description: `
  Kayıt Mesaj Embed Açık Değil! Hemen Aç Ve Öyle Dene`}})
    let mesaj = args.slice(1).join(' ')


    if(!mesaj) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`
    Bir URL Belirt Örnek: \`${prefix}k-mesaj renk #dd0707\`
 `))

      
      if(mesaj > 150) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`
    Bir Url Belirt Ve En Fazla **151 Harf Girebilirsiniz.** Örnek: \`${prefix}k-mesaj url sunuculinkinizz\`
    
    
    NOT: **Eğer Yanlış Girerseniz Gözükmez** `))
      db.set(`kmesaju.${message.guild.id}`, mesaj)

  message.channel.send(new Discord.MessageEmbed().setColor(oldu).setDescription(`${ayarlar.oldu2} | Başarıyla Kayıt URL'si Ayarlandı!`))
return
                                           }
    let rplc =   `${message.guild.memberCount.toString()}`

  let embed = new Discord.MessageEmbed()
.setDescription(`
> \`{user:etiket}\` : Kullanıcıyı ${message.author} Şeklinde Etiketler
> \`{user:ad}\` : Kullanıcının Adını \`${message.author.username}\` Şeklinde Gösterir.
> \`{user:hastag}\` : Kullanıcının Hastagını \`#${message.author.discriminator}\` Şeklinde Gösterir.
> \`{user:id}\` : Kullanıcının \`${message.author.id}\` Şeklinde İD'si
> \`{user:tag}\` :  Kullanıcıyı \`${message.author.tag}\` Şeklinde Etiketler
> \`{user:kurulus}\` : Kullanıcının \`1 yıl 25 gün 12 saat\` Şeklinde K.T.
> \`{user:durum}\` :  Kullanıcının Durumunu \`${message.author.presence.activities[0] || 'Durumu Yok!'} \` Şeklinde Gösterir

> \`{guild:tehlike}\` : Kullanıcıyı \`30 Günden Az\` Bir Kuruluş ise \`Tehlikeli\` yazar
> \`{guild:bolge}\` : Sunucunun \`${message.guild.region}\`Şeklinde Bölgesi
> \`{guild:uye}\` : Sunucunun ${rplc} Şeklinde Üye Sayısı
> \`{guild:ad}\` : Sunucunun \`${message.guild.name}\` Şeklinde Adı
> \`{guild:yetkili}\` : Kullanıcı Sunucuya Katıldığında \`Yetkiliyi\` Etiketler
> \`{guild:kayıtsız}\` : Kullanıcı Sunucuya Katıldığında \`Kayıtsız'ı\` Etiketler


**NOT:** \`Emoji Kullanacaksanız Sizin Sunucunuzda Olmalı\`
`)
.addField(`Kayıt Mesajını Ayarlamak İçin`, ` \`${prefix}k-mesaj ayarla <mesaj>\` `, true)
.addField(`Eskisine Dönmek İçin`, ` \`${prefix}k-mesaj sıfırla \` `, true)
  .addField('** **','** **')
.addField(`Embedini Ayarlamak İçin`, ` \`${prefix}k-mesaj-embed <evet/hayır> \` `, true)
.addField(`Gifini Ayarlamak İçin`, ` \`${prefix}k-mesaj gif giflink \` `, true)
  .addField('** **','** **')
.addField(`Rengini Ayarlamak İçin`, ` \`${prefix}k-mesaj renk #dd0707 örnek. \` `, true)
.addField(`URL'sini Ayarlamak İçin`, ` \`${prefix}k-mesaj url discordlink örnek. \` `, true)
  .addField('** **','** **')
.addField(`Başlığını Ayarlamak İçin`, ` \`${prefix}k-mesaj başlık Sqlite Bot Kayıt Sistemi örnek. \` `, true)

.setColor(oldu)
message.channel.send(embed)
  return






};




module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k-mesaj", "kayıtmesaj"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıt-mesaj'
};
