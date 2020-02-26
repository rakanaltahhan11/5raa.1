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


/*
client.on('message', message => {
    if (!message.channel.guild) return;
    let emojis = {
        online: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Online')}`,
        dnd: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'DND')}`,
        idle: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Idle')}`,
        offline: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Offline')}`,
        discord: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Discord')}`,
        bot: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Bot')}`
    }
    if (message.content.startsWith(prefix + 'fm')) {
        var Nikon = new Discord.RichEmbed()
            .setThumbnail(message.guild.iconURL)
            .setFooter(message.author.username, message.author.avatarURL)
            .addField('✽ Filter Members', `» ${emojis.online} \`${message.guild.members.filter(r => r.presence.status === 'online').size}\` | ${emojis.idle} \`${message.guild.members.filter(r => r.presence.status === 'idle').size}\` | ${emojis.bot} \`${message.guild.members.filter(r => r.user.bot).size}\`\n» ${emojis.dnd} \`${message.guild.members.filter(r => r.presence.status === 'dnd').size}\` | ${emojis.offline} \`${message.guild.members.filter(r => r.presence.status === 'offline').size}\` | ${emojis.discord} \`${message.guild.memberCount}\``, true);
        message.channel.send(Nikon);
    }
});
*/





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
/*const Enmap = require('enmap');
const cd = require('countdown');
const moment = require('moment');
const ms = require('ms');
const totime = require('to-time');
const dbg = new Enmap({ name: 'Giveaway' });
//const prefix = '.';
 //gstart
client.on('ready', async () => {
  await dbg.defer;
  await console.log(`Logged in as [ ${client.user.username} ]!`);
  client.guilds.forEach(async g => {
    g.channels.filter(c => c.type == 'text' && c.permissionsFor(client.user.id).has('VIEW_CHANNEL')).forEach(async c => {
      let fetched = await c.fetchMessages();
      if (fetched.size == 0) return;
      let mess = await fetched.filter(r => r.author.id === client.user.id && r.content == `**:tada: GIVEAWAY :tada:**`);
      if (mess.size == 0) return;
      mess.forEach(m => {
        if (!m) return;
        if (!dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`)) return;
        let time2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gtime;
        let text2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gtext;
        let win2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gwin;
        if (time2 === null || time2 === undefined) return;
          let embed = new Discord.RichEmbed()
          .setColor('BLUE')
          .setAuthor(`${text2}`, g.iconURL)
          .setDescription(`React with :tada: to enter!\nTime remaining: ${cd(new Date().getTime(), time2)}`)
          .setFooter(`Ends at`, client.user.avatarURL)
          .setTimestamp(time2);
  let embed2 = new Discord.RichEmbed()
          .setColor('RED')
          .setAuthor(text2, g.iconURL)
          .setFooter(`Ended at`);
        let ttimer = setInterval(async () => {
          if (!m || m.content == `:tada: **GIVEAWAY ENDED** :tada:`) return;
          let ttt = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
          if (ttt.includes(moment().diff(time2, 'seconds'))) return m.edit(`:tada: **GIVEAWAY** :tada:`, embed.setColor('#ffb800').setDescription(`**Last chance to enter!!!**\nReact with :tada:\nTime remaining: ${cd(new Date().getTime(), time2)}`));
          m.edit(`:tada: **GIVEAWAY** :tada:`, embed.setDescription(`React with :tada: to enter!\nTime remaining: ${cd(new Date().getTime(), time2)}`));
          if (moment().isAfter(time2)) {
            m.reactions.filter(a => a.emoji.name == '🎉').map(r => r.fetchUsers().then(u => {
              let rusers = u.filter(user => !user.bot).random(parseInt(win2))
              m.edit(`${g} GIVEAWAY ENDED ${g}`, embed2.setTimestamp().setDescription(`Winners:\n${rusers || 'No winners'}`));
              if (m.reactions.filter(a => a.emoji.name == '🎉').map(reaction => reaction.count)[0] <= 1) {
                return m.channel.send(`No winners :rolling_eyes:`)
              } else {
                m.channel.send(`Congratulations ${rusers}! You won the **${text2}**`)
              }
              dbg.delete(`giveaway.${g.id}.${c.id}.${m.id}.time`)
              clearInterval(ttimer)
              return;
            }))
          }
        }, 5000);
      })
    })
  })
})
//client.on('error', console.error);
//client.on('warn', warn => console.warn(`[WARN] - ${warn}`));
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', reason.stack || reason);
});
client.on('message', async (message) => {
    ///let g = client.guilds
   // .get("606910399811420175")
    //.emojis.find(r => r.name === "gstart");
  if (message.author.bot || message.channel.type == 'dm') return undefined;
  let args = message.content.split(' ');
  let timer;
  if (args[0] == `${prefix}gstart`) {
    if (message.member.hasPermission('MANAGE_GUILD') || message.member.roles.find(r => r.name == 'GIVEAWAYS')) {
      if (!args[1] || !args[2] || !args[3]) return message.channel.send(`**Usage:** ${prefix}gstart [Time] [Winners] [Giveaway Prize]\n**Example:** ${prefix}gstart 4h 1 Nitro`);
      if (!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(`I don't have **Embed Links** permission.`);
      if (ms(args[1]) === undefined) return message.channel.send(`Please use a proper time format.`);
      if (isNaN(args[2])) return message.channel.send(`Winners must be number!`);
      if (args[2] < 1 || args[2] > 10) return message.channel.send(`Winners must be bettwen 1 and 10.`);
      let timega = ms(args[1]) / 1000
      let time = Date.now() + totime.fromSeconds(timega).ms()
      if (timega < 5) return message.channel.send(`Giveaway time can't be less than 5 seconds.`)
      let timespan = cd(new Date().getTime(), time);
      let rusers;
  let embed = new Discord.RichEmbed()
        .setColor('BLUE')
        .setAuthor(`${args.slice(3).join(' ')}`)
        .setDescription(`React with :tada: to enter!\nTime remaining: ${timespan}`)
        .setFooter(`Ends at`, client.user.avatarURL)
        .setTimestamp(time);
  let embed2 = new Discord.RichEmbed()
        .setColor('RED')
        .setAuthor(args.slice(3).join(' '))
        .setFooter(`Ended at`);
      let msg = await message.channel.send(`**:tada: GIVEAWAY :tada:**`, embed).catch(err => message.channel.send(`Error: \`${err}\``));
      dbg.set(`giveaway.${message.guild.id}.${message.channel.id}.${msg.id}.time`, { gtime: time, gid: msg.id, gtext: args.slice(3).join(' '), gwin: args[2] });
      await msg.react('🎉');
      timer = setInterval(() => {
        if (!msg || msg.content == `**:tada: GIVEAWAY ENDED :tada:**`) return;
        let ttt = [-2, -3, -4, -5, -6, -7, -8, -9, -10];
        if (ttt.includes(moment().diff(time, 'seconds'))) return msg.edit(`**:tada: GIVEAWAY :tada:**`, embed.setColor('#ffb800').setDescription(`**Last chance to enter!!!**\nReact with :tada:\nTime remaining: ${cd(new Date().getTime(), time)}`));
        msg.edit(`**:tada: GIVEAWAY :tada:**`, embed.setDescription(`React with :tada: to enter!\nTime remaining: ${cd(new Date().getTime(), time)}`));
        rusers = msg.reactions.filter(a => a.emoji.name == '🎉').map(reaction => reaction.users.filter(u => !u.bot).random(parseInt(args[2])))[0];
        if (moment().isAfter(time)) {
          msg.edit(`**:tada: GIVEAWAY ENDED :tada:**`, embed2.setTimestamp().setDescription(`Winners:\n${rusers || 'No winners'}`));
          if (msg.reactions.filter(a => a.emoji.name == '🎉').map(reaction => reaction.count)[0] <= 1) { return message.channel.send(`No winners :rolling_eyes:`) } else { msg.channel.send(`Congratulations ${rusers}! You won the **${args.slice(3).join(' ')}**`) }
          clearInterval(timer)
          return;
        }
      }, 5000);
    } else return undefined;
  } else if (args[0] == `${prefix}greroll`) {
    if (message.member.hasPermission('MANAGE_GUILD') || message.member.roles.find(r => r.name == 'GIVEAWAYS')) {
      if (!args[1]) return message.channel.send(`**Usage:** ${prefix}greroll [giveaway message id]`);
      if (isNaN(args[1])) return message.channel.send(`Thats not a message ID`);
      message.channel.fetchMessage(args[1]).then(async (m) => {
        if (m.author.id != client.user.id) return message.channel.send(`This is not a giveaway message.`);
        if (!m.content ==`**:tada: GIVEAWAY :tada:**`) return message.channel.send(`This is not a giveaway message.`);
        if (m.content != `**:tada: GIVEAWAY ENDED :tada:**`) return message.channel.send(`The giveaway is not ended.`);
        if (m.reactions.size < 1) return message.channel.send(`I can't find reactions in this message.`);
        if (m.reactions.filter(a => a.emoji.name == '🎉').map(reaction => reaction.count)[0] <= 1) return message.channel.send(`No winners :rolling_eyes:`);
        m.reactions.filter(a => a.emoji.name == '🎉').map(r => r.fetchUsers().then(async (u) => {
          let rusers = u.filter(user => !user.bot).random();
          await message.channel.send(`The new winner is: ${rusers}`)
        }));
      }).catch(err => message.channel.send(`I can't find this message in the channel.`));
    } else return undefined;
  } else if (args[0] == `${prefix}gend`) {
    if (message.member.hasPermission('MANAGE_GUILD') || message.member.roles.find(r => r.name == 'GIVEAWAYS')) {
      if (!args[1]) return message.channel.send(`**Usage:** ${prefix}gend [giveaway message id]`);
      if (isNaN(args[1])) return message.channel.send(`Thats not a message ID`);
      message.channel.fetchMessage(args[1]).then(async (m) => {
        if (m.author.id != client.user.id) return message.channel.send(`This is not a giveaway message.`);
        if (!m.content ==`**:tada: GIVEAWAY :tada:**`) return message.channel.send(`This is not a giveaway message.`);
        if (m.content == `**:tada: GIVEAWAY ENDED :tada:**`) return message.channel.send(`The giveaway is ended.`);
        if (m.reactions.size < 1) return message.channel.send(`I can't find reactions in this message.`);
        let gv = dbg.get(`giveaway.${message.guild.id}.${message.channel.id}.${m.id}.time`);
        let rusers = m.reactions.map(r => r.users.filter(u => !u.bot).random(parseInt(gv.gwin)));
  let embed2 = new Discord.RichEmbed()
          .setColor('RED')
          .setAuthor(gv.gtext)
          .setFooter(`Ended at`);
        m.reactions.filter(a => a.emoji.name == '🎉').map(r => r.fetchUsers().then(async (u) => {
          let rusers = u.filter(user => !user.bot).random(parseInt(gv.gwin))
          m.edit(`**:tada: GIVEAWAY ENDED :tada:**`, embed2.setTimestamp().setDescription(`Winners:\n${rusers || 'No winners'}`));
          if (m.reactions.filter(a => a.emoji.name == '🎉').map(reaction => reaction.count)[0] <= 1) { return message.channel.send(`No winners :rolling_eyes:`) } else { message.channel.send(`Congratulations ${rusers}! You won the **${gv.gtext}**`) }
          await dbg.delete(`giveaway.${message.guild.id}.${message.channel.id}.${m.id}.time`);
          return;
        }))
      }).catch(err => message.channel.send(`I can't find this message in the channel. ${err}`));
    } else return undefined;
  }
});
*/
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
});

client.on('message', Alpahforever => {//By Alpha Codes 2019,
 //By Alpha Codes 2019,
   
  if (Alpahforever.content.startsWith(prefix +"avatar")) {//By Alpha Codes 2019,
if(!Alpahforever.channel.guild) return;//By Alpha Codes 2019,
      var alpahmen = Alpahforever.mentions.users.first();
  var alpahserver ;//By Alpha Codes 2019,
    if(alpahmen){//By Alpha Codes 2019,
        var alpahserver = alpahmen; } else { //By Alpha Codes 2019, else {
        var alpahserver = Alpahforever.author; }
    //By Alpha Codes 2019,
      const alphakef = new Discord.RichEmbed()
    .addField(`${alpahserver.tag} Avatar`, `[Click here](${alpahserver.avatarURL})`)
//By Alpha Codes 2019,
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
  let guildCreateChannel = client.channels.get("682239702836838401"); 
  
  
    
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
  let guildCreateDelete = client.channels.get("682239725897383946"); 
  
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
        online: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Online')}`,
        dnd: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'DND')}`,
        idle: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Idle')}`,
        offline: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Offline')}`,
        discord: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Discord')}`,
        bot: `${client.guilds.find(r => r.id === '569987960989155340').emojis.find(e => e.name === 'Bot')}`
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




client.login("NjgxOTg2MjYxNDMwNDM1ODg2.XlaAzw.zBWrax5m1VoRQhQOFfOdRKR5dLo")