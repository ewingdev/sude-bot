let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`).setColor(hata))
  
    if(!db.has(`otoisim.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription(`${ayarlar.hata2} | Kayıt otoisim sistemi zaten kapalı `))
    db.delete(`otoisim.${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Kayıt otoisim başarıyla **kapatıldı**`).setColor(oldu))
  
    
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k-otoisim-kapat", "kayıtotoisimkapat"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıt-otoisim-kapat'
};
