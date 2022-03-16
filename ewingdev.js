const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
const Event = require('./util/eventLoader.js')(client);
const path = require('path');
const antispam = require('discord-anti-spam'); // MODÜL
const snekfetch = require('snekfetch');
  

const app = express();

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

let prefix = ayarlar.prefix
const log = message => {

    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

 client.login(ayarlar.token).then(a => {
  console.log('Bot Başlatılıyor...')}).catch(a => {
  return console.error('Token Yanlış.')
})

//---------------------------------KOMUTLAR---------------------------------\\
client.on('message', async message => {
     if(!ayarlar.sahip.includes(message.author.id)) return; 
  if (message.content === '.tetikle') { 
    client.emit('guildMemberAdd', message.member);
    client.emit('guildMemberRemove', message.member);
    client.emit('guildBanAdd', message.member);
    message.channel.send('Katılış Eventi Tetiklendi.')
      }
  });

client.on("guildMemberAdd", async (member) => {
    let { oldu, hata, prefix, bot } = require("./ayarlar.json")
    let log = await db.fetch(`logkayıt.${member.guild.id}`)
    let destek = await db.fetch(`destekekibi.${member.guild.id}`)
    let kayıtalınacakrol = await db.fetch(`kayıtalınacakrol.${member.guild.id}`)
    let mesaj = await db.fetch(`kmesaj.${member.guild.id}`)
        let kmesajg = await db.fetch(`kmesajg.${member.guild.id}`)
                let kmesajr = await db.fetch(`kmesajr.${member.guild.id}`)

    let otoisim = await db.fetch(`otoisim.${member.guild.id}`)
    let kayıte = await db.fetch(`kayıte.${member.guild.id}`)
    let kayıtoto = await db.fetch(`otokayıt.${member.guild.id}`)
    let kayıty = await db.fetch(`kayıty.${member.guild.id}`) 
    let kmesajayarla = await db.fetch(`kmesajayarla.${member.guild.id}`)
      let kayıtkadın = await db.fetch(`kayıtkadın.${member.guild.id}`)
            let kmesaju = await db.fetch(`kmesaju.${member.guild.id}`)
            let kmesajt = await db.fetch(`kmesajt.${member.guild.id}`)

          let isimdüzen = await db.fetch(`isimdüzen.${member.guild.id}`)
     let kmesajembed = await  db.fetch(`kmesajembed.${member.guild.id}`)
let kmesajc = await db.fetch(`kmesajc.${member.guild.id}`)
    let member2 = member.user 
    let zaman = new Date().getTime() - member2.createdAt.getTime()
  var takizaman = [];
if(zaman < 604800000) {
takizaman = '**Tehlikeli**'
} else {
takizaman = `**Güvenli**`}require("moment-duration-format");
    moment.locale("tr")


  if(!kayıty) return 
    if(!kayıtalınacakrol) return 
if(!log) return
  if(!kmesajc) return
if(!kayıte) return
  if(!kayıtkadın) return
  if(kayıtoto) {
member.roles.add(kayıtoto) 
    
    
  }
  
    var takizaman2 = [];
if(zaman < 604800000) {
takizaman2 = '**Tehlikeli**'
} else {
takizaman2 = `**Güvenli**`}require("moment-duration-format");
  moment.locale("tr")
                  let kanal = client.channels.cache.get(log)

if(destek) {

    kanal.send(`<@&${kayıty}>`)
  }
  if(kmesajc) {
    
    
    if(kmesajembed) {
      
      let embed = new Discord.MessageEmbed()
      if(kmesajg) {
        embed.setImage(kmesajg)
      }
      if(kmesaju) {
        embed.setURL(kmesaju)
      }
      if(kmesajr) {
        embed.setColor(kmesajr)
      } else if(!kmesajr) {
        embed.setColor(oldu)
      }
      if(kmesajt) {
        embed.setAuthor(kmesajt)
      }
      let member2 = member.user
                let kanal = client.channels.cache.get(log)

        kanal.send(embed.setTitle(`Sude | Kayıt Sistemi`)
                   .setDescription(`${kmesajc.replace("{user:tehlike}", takizaman2)
        .replace("{user:ad}", member2.username)
        .replace("{user:hastag}", `#${member2.discriminator}`)
//{guild:ad}
        .replace("{user:etiket}", member)
                                                    .replace("{user:durum}",  member.user.presence.activities[0] || 'Özel durumu yok')
        .replace("{user:id}", member2.id)
        .replace("{user:tag}", member2.tag)
        .replace("{user:kurulus}", moment(member.user.createdAt).format("DD MMMM YYYY, dddd (hh:mm)"))
        .replace("{guild:tehlike}", takizaman)
        .replace("{guild:bolge}", member.guild.region)
        .replace("{guild:uye}", member.guild.memberCount).replace("{guild:ad}", member.guild.name)
        .replace("{guild:yetkili}", `<@&${kayıty}>`).replace("{guild:kayıtsız}", `<@&${kayıtalınacakrol}>`)
}`).setFooter(`Sude | Kayıt Sistemi`))
      return
    } else if(!kmesajembed) {

      kanal.send(kmesajc.replace("{user:tehlike}", takizaman2)
        .replace("{user:ad}", member2.username)
                      .replace("{user:hastag}", `#${member2.discriminator}`)

        .replace("{user:etiket}", member)
                                                    .replace("{user:durum}",   member.user.presence.activities[0] || 'Özel durumu yok'

)

        .replace("{user:id}", member2.id)
        .replace("{user:tag}", member2.tag)
        .replace("{user:kurulus}", moment(member.user.createdAt).format("DD MMMM YYYY, dddd (hh:mm)"))
        .replace("{guild:tehlike}", takizaman)
                 .replace("{guild:bolge}", member.guild.region)
        .replace("{guild:uye}", member.guild.memberCount).replace("{guild:ad}", member.guild.name)
        .replace("{guild:yetkili}", `<@&${kayıty}>`).replace("{guild:kayıtsız}", `<@&${kayıtalınacakrol}>`)
)
      return
    }

    
  }

  if(otoisim) {
  member.setNickname(otoisim)  
}
})
client.on("guildMemberAdd", async (member) => {
    let { oldu, hata, prefix, bot } = require("./ayarlar.json")
let usercim = await db.fetch(`otorolu.${member.guild.id}`)
let botcum = await db.fetch(`otorolb.${member.guild.id}`)
if(!usercim) return 
  if(!botcum) return 
    if(member.user.bot === true) {
    member.roles.add(botcum)  
      return
    }
  member.roles.add(usercim)
})

//tehlike / tehlikesiz
client.on("guildMemberAdd", async member => {
  let { oldu, hata } = require("./ayarlar.json")
  let tehlikerol = await db.fetch(`gtehlike.${member.guild.id}`)
    let güvenlirol = await db.fetch(`ggüven.${member.guild.id}`)
    let log = await db.fetch(`logg.${member.guild.id}`)
let log2 = client.channels.cache.get(log)


  if(!tehlikerol) return
     let member2 = member.user 
    let zaman = new Date().getTime() - member2.createdAt.getTime()

  var takizaman = [];
if(zaman < 604800000) {
takizaman = '**Tehlikeli**'
  member.roles.add(tehlikerol)
  if(log) {
        log2.send(new Discord.MessageEmbed().setDescription(`Sude bu kişiyi attı çünkü, bu Kişi **7** Günün Altında Discorda Giriş Yaptığı İçin Ona <@&${tehlikerol}> Rolünü Verdim!`).setColor(oldu))

    return
  }
if(güvenlirol) {
  

} else {
takizaman = `**Güvenli**`}
  member.roles.add(güvenlirol)

  if(log) {
  
    log2.send(new Discord.MessageEmbed().setDescription(`Sude kişiyi **7** Günün Altında Olmadığı İçin Ona <@&${güvenlirol}> Rolünü Verdim!`).setColor(oldu))
    
    return
  }
}
})