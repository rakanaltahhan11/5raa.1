const Discord = require("discord.js")
const prefix = ".";
const client = new Discord.Client();
const emojis = '677267870471684096';
const fs = require("fs");
const http = require('http');
const express = require('express');
const moment = require('moment'); 
const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";
const config = require("./config.json");
let coins = require("./coins.json");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://nikonbott.glitch.me/`);
}, 280000);



client.on('message', message => {
    if (!message.channel.guild) return;
    let emojis = {
        online: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'Online')}`,
        dnd: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'DND')}`,
        idle: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'Idle')}`,
        offline: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'Offline')}`,
        discord: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'Discord')}`,
        bot: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'Bot')}`
    }
    if (message.content.startsWith(prefix + 'fm')) {
        var Nikon = new Discord.RichEmbed()
            .setThumbnail(message.guild.iconURL)
            .setFooter(message.author.username, message.author.avatarURL)
            .addField('✽ Filter Members', `» ${emojis.online} \`${message.guild.members.filter(r => r.presence.status === 'online').size}\` | ${emojis.idle} \`${message.guild.members.filter(r => r.presence.status === 'idle').size}\` | ${emojis.bot} \`${message.guild.members.filter(r => r.user.bot).size}\`\n» ${emojis.dnd} \`${message.guild.members.filter(r => r.presence.status === 'dnd').size}\` | ${emojis.offline} \`${message.guild.members.filter(r => r.presence.status === 'offline').size}\` | ${emojis.discord} \`${message.guild.memberCount}\``, true);
        message.channel.send(Nikon);
    }
});






client.on('ready',  () => {
console.log('~ Bot On !  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
   console.log(``)
  //let link = bot.generateInvite();
	//console.log(link);
  });

client.on('ready', function() {
     
   // const statuslist = [
     // `.help | ${client.guilds.size} Servers`,
     // `.help | ${client.channels.size} Channels`,
     // `.help | ${client.users.size} Users`
   // ];
  //  const random = Math.floor(Math.random() * statuslist.length);/

    try {
       client.user.setPresence({
        game: {
          name: `.help | ${client.guilds.size} Servers`,
          type: "PLAYING",
          url: "https://www.twitch.tv/murtajaziad"
          //url: 'https://www.twitch.tv/spokloo'
        },
        status: "online"
      });
    } catch (error) {
      console.error(error);
    }
 
});
const devs = config.devs
const adminprefix = "!.";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'play')) {
  client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
    if (message.content === (adminprefix + "goaway")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'watch')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'listen')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else    
    if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done :>`)
  return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else    
  if (message.content.startsWith(adminprefix + 'streaming')) {
    client.user.setGame(argresult, "https://www.twitch.tv/murtajaziad");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
   
 
  });

client.on('message', function(message) {
  if(message.author.bot) return;
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var Dark = new Discord.RichEmbed()
        .setTimestamp()
        .setTitle('``NEW MESSAGE!!``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From ${message.author.tag} (${message.author.presence.status.toUpperCase()})`)
    client.channels.get("682930828946309122").send({embed:Dark});
    }
});

client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + "topservers")) {
      
      
      let embed = new Discord.RichEmbed()
      .setColor("#f30707")
      
      //if(!premium.includes(message.guild.id)) return message.channel.send(embed); else
        if(!devs.includes(message.author.id)) return; else
        var top = client.guilds.sort((a, b) => a.memberCount - b.memberCount).array().reverse()
     let tl = "";
      for (let i=0;i<=10;i++) {
          if (!top[i]) continue;
         tl += "`" + i + "`" +" - "+top[i].name+": "+ "**" + top[i].memberCount + "**" +"\n"+"\n"
      }
      message.channel.send(tl)
    }
});





client.on('message', message => {
   
    if (message.content.startsWith('.verfiy')) {
 let em1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt"); 
    let em2 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "falsee"); 
        var activated_servers = ['681933999224258570'];

        if (activated_servers.includes('' + message.guild.id + '') || activated_servers.includes(message.guild.id)) {

            let guildr = client.guilds.filter(r => r.ownerID === message.author.id).size;
            if (guildr === 0) {
                message.channel.send(`**${em2} | You Aren't Owner Of Any Server Where Bot Is In It**`)

            } else if (guildr >= 1) {
                if (message.guild.member(message.author).roles.find(x => x.name === `Users`)) return message.channel.send(`**${em2} | You Has This Role Aready**`);;
                message.channel.send(`**${em1} | I Found You In A Server Which You Are The Owner**`)
                message.member.addRole(message.guild.roles.find(x => x.name === `Users`));
            }
        } else {
            return;
        }

    }
});


client.on('message', message => {
 if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 12) + 1;
  let baseAmt = Math.floor(Math.random() * 12) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(message.author.bot) return;
  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + parseInt(baseAmt)
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  
  }     
});

   
client.on('message', message => {
  let emj1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt");
         if(message.content.startsWith(prefix + "cadd")) { 
           
             var user = message.mentions.members.first();
           
  let args1 = message.content.split(" ").slice(1)
  if (args1 < 1) return message.reply("Write a number");
  if(!devs.includes(message.author.id)) return; else {
   coins[message.author.id] = {
      coins: coins[message.author.id].coins + parseInt(args1)
    };  
  }
   const embed = new Discord.RichEmbed()
   .setDescription(`${emj1} | __${args1}__ has been added to your balance and now have __${coins[message.author.id].coins}__`)
   message.channel.send(embed)
       //message.channel.send(`${emj1} | You added __${args1}__ Coins and now you have __${coins[message.author.id].coins}__**.**`) 

     }  
fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
})

client.on('message', message => {
    let emj1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt");
         if(message.content.startsWith(prefix + "cremove")) { 
           
  let args1 = message.content.split(" ").slice(1)
  if (args1 < 1) return message.reply("Write a number");
  if(!devs.includes(message.author.id)) return; else
   coins[message.author.id] = {
      coins: coins[message.author.id].coins - parseInt(args1)
    };  
const embed = new Discord.RichEmbed()
   .setDescription(`${emj1} | __${args1}__ has been removed from your balance and now have __${coins[message.author.id].coins}__`)
   message.channel.send(embed)
//message.channel.send(`${emj1} | You removed __${args1}__ Coins and now you have __${coins[message.author.id].coins}__**.**`)
     }  
fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
})

client.on('message', message => {
    let emj1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt");
         if(message.content.startsWith(prefix + "cset")) { 
           
  let args1 = message.content.split(" ").slice(1)
  if (args1 < 1) return message.reply("Write a number");
  if(!devs.includes(message.author.id)) return; else
   coins[message.author.id] = {
      coins: coins[message.author.id].coins = parseInt(args1)
    };  
const embed = new Discord.RichEmbed()
   .setDescription(`${emj1} | Your balance has been set to __${coins[message.author.id].coins}__`)
   message.channel.send(embed)
//message.channel.send(`You set you Coins to __${coins[message.author.id].coins}__**.**`)
     }
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
})
/*
client.on('message', message => {
    if (message.content.startsWith(prefix + "user")) {
      var status = {
        "online": "Online.",
        "idle": "Idle.",
        "dnd": "Do Not Disturb.",
        "offline": "Offline."
    };
                     if(!message.channel.guild) return message.reply(`** | This Command Only For Servers**`);
        message.guild.fetchInvites().then(invs => {
            let member = client.guilds.get(message.guild.id).members.get(message.author.id);
            
            var args = message.content.split(" ").slice(1);
            let user = message.mentions.users.first();
            var men = message.mentions.users.first();
            var heg;
         // let coins;
          let avatar;
        let bott;
            if (men) {
                heg = men
            } else {
                heg = message.author
            }
            var mentionned = message.mentions.members.first();
            var h;
            if (mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
          if(heg.avatarURL !== null){
            avatar = `Yes`
          }else{
            avatar = "No Avatar"
          }
          if(heg.bot){
            bott = "Yes"
          }else{
            bott = "No"
          }
          
          
  
          let personalInvites = invs.filter(i => i.inviter.id === h.id);
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
                      let roles = h.roles.map(r => r).slice(1 , 3).toString() + '\n' + h.roles.map(r => r).slice(3 , 6).toString();

           // moment.locale('ar-TN');
            var id = new Discord.RichEmbed()
                .setColor("#42A9C9")
                .setThumbnail(heg.avatarURL)
                .addField(`Username: `, ` **${heg.username} \`(${heg.id})\`** `)
                .addField(`About: `, `  Account Created At:** \`${moment(heg.createdTimestamp).format('D/MM/YYYY h:mm a')}\` | \`${moment(heg.createdAt).fromNow()}\` **
User Status: **\`${heg.presence.game || 'No Thing'}\`**
Bot: **\`${bott}\`**
Avatar: **\`${avatar}\`**`)
           // .addField("Economy", `Coins: **\`${coins}\`**`)
                .addField(` Invites: `, ` **${inviteCount}**`)
                .addField(` Roles: `,` ${roles}`)
                .setFooter(`Requested By: ${message.author.username}`, message.author.avatarURL)
            .setTimestamp();
            message.channel.sendEmbed(id);
        })
    }
});*/


client.on('message', message => {
   let em1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "dollar");
  let em2 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "es");
  let em3 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "balance");
  let em4 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "aaaa");
  let em6 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "plus");
  let em5 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "pen");
if (message.content.startsWith(prefix + "id")) {
   var args = message.content.split(" ").slice(1);
  message.guild.fetchInvites().then(invs => {
     let user = message.mentions.users.first();
  var men = message.mentions.users.first();

     var heg;
     if(men) {
        heg = men 
     } else {
        heg = message.author
     }
     var mentionned = message.mentions.members.first();
     var h;
     if(mentionned) {
        h = mentionned
     } else {
        h = message.member
     }
           moment.locale('EN-US');
     let personalInvites = invs.filter(i => i.inviter.id === h.id);
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
     var guild = message.guild
     let inviteandstuff = undefined;
     
   if (inviteandstuff == undefined) {
       inviteandstuff = "";
       }
      guild.fetchInvites()
       .then(invites => {
        invites.forEach(invite => {
           if (invite.inviter === heg) {
             inviteandstuff=invite.inviter
                
               }
             });
    
             let roles = h.roles.map(r => r).slice(1 , 3).toString() + '\n' + h.roles.map(r => r).slice(3 , 6).toString();
        let uCoins = coins[message.author.id].coins;
        let mCoins = coins[heg.id].coins;
        var i;
        if(men) {
          i = coins[heg.id].coins;
        } else {
          i = coins[message.author.id].coins;
        }

               var id = new Discord.RichEmbed()
     .setDescription(`**• Some information about __${heg.username}__ :
\`\`\`js
ID : ${heg.id}
Status : ${heg.presence.status.toUpperCase()}
Bot : ${heg.bot.toString().toUpperCase()}\`\`\`**`)
     .addField(`${em5} | Joined discord from :`, `__${moment(heg.createdTimestamp).format('`D/M/YYYY HH:mm`')}__ **\n** \**${moment(heg.createdTimestamp).fromNow()}\**` ,true) 
     .addField(`${em4} | Joined server from :`, `__${moment(h.joinedAt).format('`D/M/YYYY HH:mm`')}__ \n \**${moment(h.joinedAt).fromNow()}\**`, true)               
     .addField(`${em3} | Invites :`, `**__${inviteCount}__**`, true)  
     .addField(`${em1} | Your coins :`, `**__${i}__€**`, true)          
     .addField(`${em6} | Roles : `,`**__${roles}__**`)
     .addField(`${em2} | I see you in :`,`** __${client.guilds.filter(g => g.members.find(m => m.id == heg.id)).size}__ Guild** `)
             
     .setThumbnail(heg.avatarURL)
     message.channel.send(id)
      })
})}});

client.on('message', Alpahforever => {

  if (Alpahforever.content.startsWith(prefix +"avatar")) {
if(!Alpahforever.channel.guild) return;
      var alpahmen = Alpahforever.mentions.users.first();
  var alpahserver ;
    if(alpahmen){
        var alpahserver = alpahmen; } else { 
        var alpahserver = Alpahforever.author; }
  
      const alphakef = new Discord.RichEmbed()
    .addField(`${alpahserver.tag} Avatar`, `[Click here](${alpahserver.avatarURL})`)

      .setColor(embedColor)
      .setImage(`${alpahserver.avatarURL}`)
    Alpahforever.channel.sendEmbed(alphakef);
  }
  });

client.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
});


client.on("message", message => {
  //a little bit of data parsing/general checks
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let content = message.content.split(" ");
  let command = content[0];
  let args = content.slice(1);
  let prefix = ".";


  //checks if message contains a command and runs it
  let commandfile = client.commands.get(command.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args);
})


client.on("guildCreate", async guild => {
  let guildCreateChannel = client.channels.get("682368247697375499"); 
  
  
    
    let joinEmbed = new Discord.RichEmbed()
      .setThumbnail(guild.iconURL)
      .setAuthor(`NikonBot. Joined A Server ✅`)
      .setDescription(`**
 Server name: __${guild.name}__
 Server id: __${guild.id}__
 Server owner: __${guild.owner}__
 Members Count: __${guild.memberCount}__
 Servers Counter : __${client.guilds.size}__**`)
      
    guildCreateChannel.send(joinEmbed);

});

client.on("guildDelete", async guild => {
  let guildCreateDelete = client.channels.get("682368247697375499"); 
  
  let leaveEmbed = new Discord.RichEmbed()
    .setThumbnail(guild.iconURL)
  .setAuthor(`NikonBot. left A Server ❎`)
  .setDescription(`**
 Server name: __${guild.name}__
 Server id: __${guild.id}__
 Server owner: __${guild.owner}__
 Members Count: __${guild.memberCount}__
 Servers Counter : __${client.guilds.size}__**`)
  guildCreateDelete.send(leaveEmbed); 
});



client.on('message', message => {
  let emoji = {
        right: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'rightt')}`,
        wrong: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'falsee')}`,
        no: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'no')}`,
        load: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'load')}`
      
    }
  client.on('message', message => {
    
if(message.author.bot) return
  var command = message.content.split(" ")[0];
  var args = message.content.split(" ").slice(1);
  if (command == "kickk") {
   if(!message.channel.guild) return message.channel.send(``);
   const guild = message.guild;
    
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send(` | **You Don't Have Enough Permissions**.`);
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send(`| **I Don't Have Enough Permissions**.`);
  var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.channel.send(`| **Mention A Member**.`);
  if (!message.guild.member(user).kickable) return message.channel.send(` | **I Can't Give Him Kick Because His Rank Is Higher More Than Me**.`);
if (user.id == message.guild.ownerID) return message.channel.send(`|** How I Can Give The OwnerShip Kick. **`)
    message.channel.send(`** | ${user.tag} He Take Kick By : <@${message.author.id}> ! :airplane:** `)
  message.guild.member(user).kick(reason)
  guild.owner.send(`Server : ${guild.name}
**Done Kicked** :${user.tag}  
**By** : <@${message.author.id}>`).then(()=>{
message.guild.member(user).kick();
  })
}
  })
});

client.on('message', async message =>{
	    let emoji = {
        right: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'rightt')}`,
        wrong: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'cd')}`,
        no: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'no')}`,
        load: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'load')}`
      
    }
    if (message.author.boss) return;
   
  
  if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
       command = command.slice(prefix.length);
      let args = message.content.split(" ").slice(1);
      if (command ==  "mute") {
          if (!message.channel.guild) return;
              if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply(`${emoji.cd} | **You Don't Have Enough Permissions**.`).then(msg => msg.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply(`${emoji.cd} | **I Don't Have Enough Permissions**`).then(msg => msg.delete(5000));;
          let user = message.mentions.users.first();
          let muteRole = message.guild.roles.find("name", "Muted");
          if (!muteRole) return message.reply(`${emoji.load} | **Please Make A Role With Name __\`\`Muted\`\`__`).then(msg => {msg.delete(5000)});
          if (message.mentions.users.size < 1) return message.reply(`${emoji.load} | **Mention A Member**.`).then(msg => {msg.delete(5000)});
          let reason = message.content.split(" ").slice(2).join(" ");
          message.guild.member(user).addRole(muteRole);
          message.channel.sendMessage(`${emoji.right} | **${user} Muted by <@${message.author.id}>**.`);
          var muteembeddm = new Discord.RichEmbed()
          .setAuthor(`Muted!`, user.displayAvatarURL)
          .setDescription(`      
  ${user} You Took Mute
  ${message.author.tag} By
  [ ${reason} ] : Reason
  `)
          .setFooter(`In : ${message.guild.name}`)
          .setColor("RANDOM")
      user.send( muteembeddm);
    }
  if(command === `unmute`) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage(`${emoji.cd} | **You Don't Have Enough Permissions**.`).then(m => m.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply(`${emoji.cd} | **I Don't Have Enough Permissions**.`).then(msg => msg.delete(6000))
  
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage(`${emoji.load} | **Mention A Member**.`);
  
    let role = message.guild.roles.find (r => r.name === "Muted");
    
    if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage(`**He Didn't Take A Mute Before**.`)
  
    await toMute.removeRole(role)
    message.channel.sendMessage(`${emoji.right} | **Done**.`);
  
    return;
  
    }
  
  });
   

client.on('message', message => {
  let emoji = {
        right: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'rightt')}`,
        wrong: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'falsee')}`,
        no: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'no')}`,
        load: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'load')}`
      
    }
  if (message.author.codes) return;
  
 
  let command = message.content.split(" ")[0];
 
  let args = message.content.split(" ").slice(1);
 
  if (command == prefix + "ban") {
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(":information_source: | **You Don't Have Enough Permissions**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(":information_source: | **I Don't Have Enough Permissions**");
  let user = message.mentions.users.first();
 
  if (message.mentions.users.size < 1) return message.channel.send(`${emoji.load} | **Mention A Member**. `);
  if (!message.guild.member(user)
  .bannable) return message.channel.send(`${emoji.load} | **I can't ban him because his rank is higher more than me**.`);
 
 
  message.guild.member(user).ban(7, user);
 
message.channel.send(`**${emoji.right} |  ${user.username} banned from the server ! :airplane: **  `)
 
}
});

client.on('message', message => {

  let command = message.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length)
	if (message.channel.type !== 'text') return;
if (command === 'server' || command === "guild") {
	let emoji = {
        online: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'Online')}`,
        dnd: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'DND')}`,
        idle: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'Idle')}`,
        offline: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'Offline')}`,
        discord: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'Discord')}`,
        bot: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'Bot')}`
  }
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`**You Don't Have Enough Permissions**.`).then(msg => msg.delete(3000));
    message.guild.fetchBans().then(bans => {
      var bansSize = bans.size;
      
      var server = new Discord.RichEmbed()
     
      .setDescription (`• **Some Info About __${message.guild.name}__**
**\`\`\`js
Server ID : (${message.guild.id})
AFK Room : (${message.guild.afkChannel || "I Can't Find It"})\`\`\`** `)
      .addField(`✽ **__Server Owner__**`, `**↝** [ **${message.guild.owner}** ]`) 
      .addField(`✽ **__Server Type__**`, `**↝** [ ** ${message.guild.region}** ]`, true)
      .addField(`✽ **__Server Created At__**`, `**↝ **[ **${moment(message.guild.createdAt).format("LL")}** ]`, true)
      .addField(`✽ **__Roles Amount__**`, `**↝** [ **${message.guild.roles.size}** ]`, true)
      .addField(`✽ **__Channels__**`, `**↝ \`#\` ${message.guild.channels.filter(a => a.type === 'text').size} - \`🎤\` ${message.guild.channels.filter(a => a.type === 'voice').size}**`, true)
      .addField(`✽ **__Bans Amount__**`, `**↝** [ **${bansSize}** ]`, true)
      .addField(`✽ **__Last Member__**`, `**↝** [ **${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `<@!${m.id}>`).splice(0, 1)}** ]`, true)
      .addField(`✽ **__Members__**`, `**↝ ${emoji.online} \`${message.guild.members.filter(r => r.presence.status === 'online').size}\` | ${emoji.idle} \`${message.guild.members.filter(r => r.presence.status === 'idle').size}\` | ${emoji.bot} \`${message.guild.members.filter(r => r.user.bot).size}\`\n↝ ${emoji.dnd} \`${message.guild.members.filter(r => r.presence.status === 'dnd').size}\` | ${emoji.offline} \`${message.guild.members.filter(r => r.presence.status === 'offline').size}\` | ${emoji.discord} \`${message.guild.memberCount}\`**`, true)
        .setFooter('Requested By : ' + message.author.username,message.author.displayAvatarURL)
      .setTimestamp()
      .setColor('#36393e')
      .setThumbnail(message.guild.iconURL)
      message.channel.send(server)

    })
}
  
});

client.on("message", message => {
	var args = message.content.split(' ').slice(1); 

	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
  let roleremove = new Discord.RichEmbed()
  .setDescription(`**Role Remove :
\`\`\`JS
.roleremove @mention <RoleName> : To Remove A Rank From One Member Only,
.roleremove all <RoleName> : To Remove A Rank From All,
.roleremove bots <RoleName> : To Remove A Rank From All Bots Only,
.roleremove humans <RoleName> : To Remove A Rank From All Humans Only.\`\`\`**`);
  let roleadd = new Discord.RichEmbed()
   .setDescription(`**Role Add :
\`\`\`JS
.role @mention <RoleName> : To Give A Rank To One Member Only,
.role all <RoleName> : To Give A Rank To All,
.role bots <RoleName> : To Give A Rank To All Bots Only,
.role humans <RoleName> : To Give A Rank To All Humans Only.\`\`\`**`)
	if( !msg.startsWith('.role')) return;
          if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
              if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But I Dont Have Permission** `MANAGE_GUILD`' );
let embed = new Discord.RichEmbed()
      .setColor("#f30707")
      .setDescription(":x: | You need to buy `Premium`")
      
    // if(!premium.includes(message.guild.id)) return message.channel.send(embed); else
  
	if( msg.toLowerCase().startsWith('.roleremove' )){
    
    let embed = new Discord.RichEmbed()
      .setColor("#f30707")
      .setDescription(":x: | You need to buy `Premium`")
      
    // if(!premium.includes(message.guild.id)) return message.channel.send(embed); else
		if( !args[0] ) return message.channel.send(roleremove);
		if( !args[1] ) return message.channel.send(roleremove);
 //if(!message.guild.channel) return message.reply("hi")
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.channel.send(roleremove);if( message.mentions.members.first() ){

			message.mentions.members.first().removeRole( role1 );
			//return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');

      const e = new Discord.RichEmbed()
    
      
             .setDescription(':white_check_mark:** Change Role For **'+args[0]+'**,** '+'**'+'- '+'`'+role1.name+'`'+'**')
             .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
             .setColor('BLACK')
              message.channel.send(e)
		}
		if( args[0].toLowerCase() == "all" ){
      

      const e1 = new Discord.RichEmbed()
    
           .setDescription(':white_check_mark:** Change Roles For **\`\`All\`\`**,** '+'**'+'- '+'`'+role1.name+'`'+'**')
           .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
           .setColor('BLACK')
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.channel.send(e1)
		} else if( args[0].toLowerCase() == "bots" ){
      

      const e2 = new Discord.RichEmbed()
    
           .setDescription(':white_check_mark:** Change Roles For **\`\`Bots\`\`**,** '+'**'+'- '+'`'+role1.name+'`'+'**')
           .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
           .setColor('BLACK')
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.channel.send(e2)
		} else if( args[0].toLowerCase() == "humans" ){

      const e3 = new Discord.RichEmbed()
    
           .setDescription(':white_check_mark:** Change Roles For **\`\`Humans\`\`**,** '+'**'+'- '+'`'+role1.name+'`'+'**')
           .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
           .setColor('BLACK')
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.channel.send(e3)
		} 	
	} else {
		if( !args[0] ) return message.channel.send(roleadd);
		if( !args[1] ) return message.channel.send(roleadd);
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.channel.send(roleadd);if( message.mentions.members.first() ){

			message.mentions.members.first().addRole( role1 );
			//return message.reply(`**:white_check_mark: \`\`[ ${role1.name} ]\`\` رتبة \`\`[ ${args[0]} ]\`\` لقد تم اعطاء **`);
     const e = new Discord.RichEmbed()
    
           .setDescription(':white_check_mark:** Change Roles For **'+args[0]+'**,** '+'**'+'+ '+'`'+role1.name+'`'+'**')
           .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
           .setColor('BLACK')
            message.channel.send(e)
     
     
     
      
		}
		if( args[0].toLowerCase() == "all" ){
      

       const e1 = new Discord.RichEmbed()
    
           .setDescription(':white_check_mark:** Change Roles For **\`\`All\`\`**,** '+'**'+'+ '+'`'+role1.name+'`'+'**')
           .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
           .setColor('BLACK')
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.channel.send(e1)
		} else if( args[0].toLowerCase() == "bots" ){
      

      const e2 = new Discord.RichEmbed()
    
           .setDescription(':white_check_mark:** Change Roles For **\`\`Bots\`\`**,** '+'**'+'+ '+'`'+role1.name+'`'+'**')
           .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
           .setColor('BLACK')
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.channel.send(e2)
		} else if( args[0].toLowerCase() == "humans" ){
      

       const e3 = new Discord.RichEmbed()
    
           .setDescription(':white_check_mark:** Change Roles For **\`\`Humans\`\`**,** '+'**'+'+ '+'`'+role1.name+'`'+'**')
           .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
           .setColor('BLACK')
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.channel.send(e3)
		} 
	} 
});

var top = require("./top.json");
function save() {
    fs.writeFileSync("./top.json", JSON.stringify(top, null, 4));
}
client.on("voiceStateUpdate", async function(oldMember, newMember) {
    if (newMember.user.bot) return;
    if (!top[newMember.guild.id]) top[newMember.guild.id] = {};
    if (!top[newMember.guild.id][newMember.user.id]) top[newMember.guild.id][newMember.user.id] = {
        "text": 0,
        "voice": parseInt(Math.random()*10),
        "msgs": 0,
        "id": newMember.user.id
    }
    save();
    if (!oldMember.voiceChannel && newMember.voiceChannel) {
        var addXP = setInterval(async function () {
            top[newMember.guild.id][newMember.user.id].voice+=parseInt(Math.random()*4);
            save();
            if (!newMember.voiceChannel) {
                clearInterval(addXP);
            }
        }, 60000);
    }
});
client.on("message", async function (message) {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!top[message.guild.id]) top[message.guild.id] = {};
    if (!top[message.guild.id][message.author.id]) top[message.guild.id][message.author.id] = {
        "text": parseInt(Math.random()*10),
        "voice": 0,
        "msgs": 0,
        "id": message.author.id
    }
    if (top[message.guild.id][message.author.id].msgs > 10) {
        top[message.guild.id][message.author.id].text += parseInt(Math.random()*4);
        top[message.guild.id][message.author.id].msgs = 0;
    }
    save();
    var args = message.content.split(" ");
    var cmd = args[0].slice(prefix.length).toLowerCase();
    if (!message.content.startsWith(prefix)) return;
    switch (cmd) {
        case "top":
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 10).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.text > 0) {
                    return `**\`#${++num}\` | <@${user.id}> XP: \`(${user.text})\` **`
                }
            }).join("\n")}`;
            num = 0;
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 10).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.voice > 0) {
                    return `**\`#${++num}\` | <@${user.id}> XP: \`(${user.voice})\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .addField(`» TOP 10 TEXT`, textStr.length > 1 ? textStr : "» NO TOP TEXT", true)
            .addField(`» TOP 10 VOICE`, voiceStr.length > 1 ? voiceStr : "» NO TOP VOICE", true)
            .setFooter(client.user.tag, client.user.displayAvatarURL)
            .setColor("BLUE");
            message.channel.send({
                embed: embed
            });
        break;
      case "top voice":
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 5).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.voice > 0) {
                    return `**\`#${++num}\` | <@${user.id}> XP: \`(${user.voice})\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.RichEmbed()
            .setTitle("» TOP 5 VOICE")
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setDescription(voiceStr.length > 1 ? voiceStr : "» NO TOP VOICE")
            .setFooter(client.user.tag, client.user.displayAvatarURL)
            .setColor("BLUE");
            message.channel.send({
                embed: embed
            });
        break;
      case "top text":
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 5).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.text > 0) {
                    return `**\`#${++num}\` | <@${user.id}> XP: \`(${user.text})\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.RichEmbed()
            .setTitle("» TOP 5 TEXT")
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setDescription(textStr.length > 1 ? textStr : "» NO TOP TEXT")
            .setFooter(client.user.tag, client.user.displayAvatarURL)
            .setColor("BLUE");
            message.channel.send({
                embed: embed
            });
        break;
    }
});



client.login("NjgxOTg2MjYxNDMwNDM1ODg2.XlaAzw.zBWrax5m1VoRQhQOFfOdRKR5dLo")