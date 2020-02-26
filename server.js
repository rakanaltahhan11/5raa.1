const Discord = require("discord.js")
const client = new Discord.Client();
const prefix = ".";
const fs = require("fs");
const giveaways = require("discord-giveaways")
const http = require('http');
const express = require('express');
const devs = ["654741240310399005", "670413244594126861"];
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://nikonbott.glitch.me/`);
}, 280000);

const settings = {
    prefix: ".",
    token: "NjgxOTg2MjYxNDMwNDM1ODg2.XlaAzw.zBWrax5m1VoRQhQOFfOdRKR5dLo"
};

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
const Enmap = require('enmap');
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
      if (!args[1]) return message.channel.send(`**Usage:** ${prefix}reroll [giveaway message id]`);
      if (isNaN(args[1])) return message.channel.send(`Thats not a message ID`);
      message.channel.fetchMessage(args[1]).then(async (m) => {
        if (m.author.id != client.user.id) return message.channel.send(`This is not a giveaway message.`);
        if (!m.content.startsWith(`**:tada: GIVEAWAY**`)) return message.channel.send(`This is not a giveaway message.`);
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
      if (!args[1]) return message.channel.send(`**Usage:** ${prefix}reroll [giveaway message id]`);
      if (isNaN(args[1])) return message.channel.send(`Thats not a message ID`);
      message.channel.fetchMessage(args[1]).then(async (m) => {
        if (m.author.id != client.user.id) return message.channel.send(`This is not a giveaway message.`);
        if (!m.content.startsWith(`**:tada: GIVEAWAY**`)) return message.channel.send(`This is not a giveaway message.`);
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
      }).catch(err => message.channel.send(`I can't find this message in the channel.`));
    } else return undefined;
  }
});


client.login("NjgxOTg2MjYxNDMwNDM1ODg2.XlaAzw.zBWrax5m1VoRQhQOFfOdRKR5dLo")