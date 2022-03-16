let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`).setColor(hata))
  let yazı = args.slice(0).join(' ')
if(!yazı) return message.channel.send(new Discord.MessageEmbed().setDescription(`
Selam, Bir İsim Belirtmen Gerekmekte Örnekler Aşşağıda:

\`${prefix}k-otoisim İsim Yaş\`
\`${prefix}k-otoisim 主 İsim Yaş\`
\`${prefix}k-otoisim-kapat\`
Bu Seçenekleri Kullanabilirsiniz.`).setColor(hata))
  
  
    if(db.has(`otoisim.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} |  Sistem Zaten Açık!`).setColor(hata))
    if(yazı.length > 15) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | En Fazla 15 Karakter Uzunluğa Gidebilirsin`).setColor(hata))
    db.set(`otoisim.${message.guild.id}`, yazı) 
    message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Artık Kullanıcı Sunucuya Katıldığı Anda İsmi ${yazı} Olacak`).setColor(oldu))

    
}


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k-otoisim", "kayıtotoisim"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıt-otoisim'
};
