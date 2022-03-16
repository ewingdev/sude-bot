const db = require('quick.db')
let Discord = require("discord.js")
const { Client, Util } = require("discord.js");

const ayarlar = require('../ayarlar.json');
module.exports = async message => {
          let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  
  
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
  


     
      
if(cmd) {
  if(cmd.conf.enabled == false) {
          if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.sahip.includes(message.author.id)) {
               const embed1 = new Discord.MessageEmbed()
                    .setDescription(`:x: **${cmd.help.name}** isimli komut şuanda geçici olarak kullanıma kapalıdır!`)
                    .setColor("RED")
                message.channel.send(embed1)
                return
            
          }
  }
}
if (!client.commands.has(command)) {
   if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
   } else {
   if(command == '') return;
     message.channel.send(
      new Discord.MessageEmbed()
       .setColor(ayarlar.hata)
   .setDescription("**Botta __" + command + '__ adında bir komut bulunamadım**'))
  }
}
     }
 
