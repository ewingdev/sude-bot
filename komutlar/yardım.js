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

  

    let rplc =   `${message.guild.memberCount.toString()}`

  let embed = new Discord.MessageEmbed()
.setDescription(`
> \`${prefix}kayıt-alınacak-rol\` : Kullanıcı Kayıt Edilginde Kullanıcıdan KAYITSIZ Rolünü Almayı Sağlar.
> \`${prefix}kayıt-destek\` : Kayıt Destek Ekibini Ayarlarsınız.
> \`${prefix}kayıt\` : Kullanıcıyı Kayıt Edersiniz.
> \`${prefix}kayıt-isim-düzen\` :  Kayıt Edilen Kullanıcın İsim Düzenini Ayarlarsınız.
> \`${prefix}kayıt-isimzorun\` : Kayıt Edilirken İsim Zorunlulugunu Ayarlarsınız.
> \`${prefix}kayıt-kadın-rol\` :  Kayıt Kadın Rolünü Ayarlarsınız.

> \`${prefix}kadın\` : Kullanıcıyı KADIN Olarak Kayıt Edersiniz.
> \`${prefix}kayıt-yetkili-rol\` : Kayıt Yetkili Rolünü Ayarlarsınız.
> \`${prefix}kayıt-log\` : Kullanıcıları Karşılayacagı Kanalı Ayarlarsınız.
> \`${prefix}kayıt-mesaj-embed\` : Kayıt Mesajının Embed Ayarlarını Yaparsınız.
> \`${prefix}kayıt-mesaj\` : Kayıt Mesajını Ayarlarsınız.
> \`${prefix}kayıt-otoisim\` : Sunucuya Katılan Kullanıcın OTO İsmini Ayarlarsınız
> \`${prefix}kayıt-oto-rol\` : Sunucuya Katılan Kullanıcıya Verilen Rol (OTOROL)

Botun Prefixi : ${prefix}  Olarak Ayarlıdır.

`)

.setColor(oldu)
message.channel.send(embed)
  return






};




module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım'
};
