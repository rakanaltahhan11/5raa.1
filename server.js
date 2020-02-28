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
         if(message.content.startsWith(prefix + "cadd")) { 
           
             var user = message.mentions.members.first();
           
  let args1 = message.content.split(" ").slice(1)
  if (args1 < 1) return message.reply("Write a number");
  if(!devs.includes(message.author.id)) return; else {
   coins[message.author.id] = {
      coins: coins[message.author.id].coins + parseInt(args1)
    };  
  }
        
  message.channel.send(`You added __${args1}__ Coins and now you have __${coins[message.author.id].coins}__**.**`) 
     
     }  
fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
})

client.on('message', message => {
         if(message.content.startsWith(prefix + "cremove")) { 
           
  let args1 = message.content.split(" ").slice(1)
  if (args1 < 1) return message.reply("Write a number");
  if(!devs.includes(message.author.id)) return; else
   coins[message.author.id] = {
      coins: coins[message.author.id].coins - parseInt(args1)
    };  

message.channel.send(`You removed __${args1}__ Coins and now you have __${coins[message.author.id].coins}__**.**`)
     }  
fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
})

client.on('message', message => {
         if(message.content.startsWith(prefix + "cset")) { 
           
  let args1 = message.content.split(" ").slice(1)
  if (args1 < 1) return message.reply("Write a number");
  if(!devs.includes(message.author.id)) return; else
   coins[message.author.id] = {
      coins: coins[message.author.id].coins = parseInt(args1)
    };  

message.channel.send(`You set you Coins to __${coins[message.author.id].coins}__**.**`)
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

               var id = new Discord.RichEmbed()
     .setDescription(`**• Some information about __${heg.username}__ :
\`\`\`js
ID : ${heg.id}
Status : ${heg.presence.status.toUpperCase()}
He is a bot : ${heg.bot.toString().toUpperCase()}\`\`\`**`)
     .addField(`${em5} | Joined discord from :`, `__${moment(heg.createdTimestamp).format('`D/M/YYYY HH:mm`')}__ **\n** \**${moment(heg.createdTimestamp).fromNow()}\**` ,true) 
     .addField(`${em4} | Joined server from :`, `__${moment(h.joinedAt).format('`D/M/YYYY HH:mm`')}__ \n \**${moment(h.joinedAt).fromNow()}\**`, true)               
     .addField(`${em3} | Invites :`, `**__${inviteCount}__**`, true)  
     .addField(`${em1} | Your coins :`, `**__${uCoins}__**`, true)          
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
  .setDescription(`
  أمثله على الأوامر : 
  .roleremove @mention rolename : لسحب رتبة لعضو معين
  .roleremove all rolename : لسحب رتبة للجميع 
  .roleremove humans rolename : لسحب رتبة للاشخاص فقط
  .roleremove bots rolename : لسحب رتبة لجميع البوت`);
  let roleadd = new Discord.RichEmbed()
   .setDescription(`
  أمثله على الأوامر : 
  .role @mention rolename : لأعطاء رتبة لعضو معين
  .role all rolename : لأعطاء رتبة للجميع 
  .role humans rolename : لأعطاء رتبة للاشخاص فقط
  .role bots rolename : لأعطاء رتبة لجميع البوتات`)
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