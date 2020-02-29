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
const config = require("./config.json");//
let coins = require("./coins.json");




const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://nikonbott.glitch.me/`);
}, 280000);

var voiceonline = require ("./voiceonline.json");
client .on ("message", async (Message) => {
    if (!Message ["guild"] ||
    Message ["author"].bot) return false;

    if (Message ["content"].startsWith (prefix + "setvc")) {
        if (!Message ["member"].hasPermission ("MANAGE_CHANNELS")) return Message ["reply"] ("**You need `MANAGE CHANNELS` Permissions to execute this command.**");
        var name = Message ["content"].split (" ").slice (1).join (" ");
        if (!name) return Message ["reply"] ("**Specify a name. please type %vo% for voiceonline numbers\nExample: " + prefix + "setvc Voice Online [%vo%]**");
        var onlines = Message ["guild"].members.filter (m => m.voiceChannel).size;
        Message ["guild"].createChannel (name ["replace"] ("%vo%", onlines), "voice") .then (async (voice) => {
            voiceonline [Message ["guild"].id] = {
                "ch": (voice ["id"]),
                "name": (name)
            };
            saveVoiceOnline ();
            Message ["channel"].send ("**Successfully created voiceonline **")
        });
    }
})
.on ("voiceStateUpdate", async (Steve, Akame) => {
    if (!voiceonline [Steve ["guild"].id]) return console.log ("nope");
    var channel = Akame ["guild"].channels.get (voiceonline [Steve ["guild"].id].ch);
    if (!channel) return console.log ("no channel");
    channel ["setName"] (voiceonline [Steve ["guild"].id].name.replace ("%vo%", Steve ["guild"].members.filter (m => m.voiceChannel).size));
})

function saveVoiceOnline() {
    (require ("fs")) ["writeFileSync"] ("./voiceonline.json", JSON ["stringify"] (voiceonline, null, 4))
}


const setc = require("./setc.json")
const setrole = require("./setrole.json")
let tchannels  = [];
let current    = 0;
/*client.on("message", message => {
  let args = message.content.split(" ");
  if(message.content === prefix + 'mtickets')
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`${emojis.wrong}, **أنت لست من ادارة السيرفر لتنفيذ هذا الأمر.**`);
		if(args[1] && args[1].toLowerCase() === "enable") {
			mtickets = true;
			message.channel.send(`:white_check_mark:, **تم تفعيل التكتات , الاَن يمكن لأعضاء السيرفر استخدام امر انشاء التكت**`);
		} else if(args[1] && args[1].toLowerCase() === "disable") {
			mtickets = false;
			message.channel.send(`:white_check_mark:, **تم اغلاق نظام التكتات , الاَن لا يمكن لأي عضو استخدام هذا الأمر**`);
		} else if(!args[1]) {
			if(mtickets === true) {
			mtickets = false;
			message.channel.send(`:white_check_mark:, **تم اغلاق نظام التكتات , الاَن لا يمكن لأي عضو استخدام هذا الأمر**`);
			} else if(mtickets === false) {
			mtickets = true;
			message.channel.send(`:white_check_mark:, **تم تفعيل التكتات , الاَن يمكن لأعضاء السيرفر استخدام امر انشاء التكت**`);
			}
		}
})
*/

client.on("message", async message => {
  let emoji = {
    right: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'rightt')}`,
    wrong: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'falsee')}`,
    no: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'no')}`,
    load: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'load')}`
  
}
  if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	if(message.content.toLowerCase().startsWith(prefix + `setcategory`)){
	if(!setc[message.guild.id]) setc[message.guild.id] = {
    category: "Tickets"
}

		const category = setc[message.guild.id].category
		let newcategory = message.content.split(' ').slice(1).join(' ');
		let thiscategory = message.guild.categories.find('name', newcategory);
                let fltrc = message.guild.channels.filter(m => m.name === newcategory).type !== 'category';
 if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}
    const role = setrole[message.guild.id].role
    const srole = setrole[message.guild.id].role
    let thisrole = message.member.roles.find("name", srole);
	 const d11x1xx = new Discord.RichEmbed()
     .setDescription(`${emoji.wrong} | You do not have permission for that command! If you believe this is a mistake please add the role called \`\`${srole}\`\` to yourself.`)  
     .setColor(embedFail);
	if(!thisrole) return message.channel.send(d11x1xx);
     const NOTX1 = new Discord.RichEmbed()
     .setDescription(`${emoji.load} | Usage: \`\`${prefix}setcategory <name>\`\``)  
     .setColor(embedFail);
	if(!newcategory) return message.channel.send(NOTX1);
		  const CANT = new Discord.RichEmbed()
     .setDescription(`${emoji.wrong} | I can't find this category \`\`${newcategory}\`\``)  
     .setColor(embedFail);
		if(!thiscategory) return message.channel.send(CANT);
	const filtr = new Discord.RichEmbed()
     .setDescription(`${emoji.wrong} | This not a category \`\`${newcategory}\`\``)  
     .setColor(embedFail);
		if(fltrc) return message.channel.send(filtr);
	  setc[message.guild.id].category = newcategory	
		  const D1 = new Discord.RichEmbed()
     .setDescription(`${emoji.right} | The tickets category has been set to \`\`${newcategory}\`\``)  
     .setColor(embedSuccess);
	message.channel.send(D1);
		fs.writeFile("./setc.json", JSON.stringify(setc, null, 4), err => {
        if(err) throw err;
          });
	}
});



client.on("message", async message => {
  let emoji = {
    right: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'rightt')}`,
    wrong: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'falsee')}`,
    no: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'no')}`,
    load: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'load')}`
  
}
  if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	if(message.content.toLowerCase().startsWith(prefix + `setrole`)){
	if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}

		const role = setrole[message.guild.id].role
		let newrole = message.content.split(' ').slice(1).join(' ');
		let thisrole = message.guild.roles.find('name', newrole);
		let permission = message.guild.member(message.author).hasPermissions('ADMINISTRATOR');
		 const d11x1x42x = new Discord.RichEmbed()
     .setDescription(`${emoji.wrong} | You do not have permission for that command! If you believe this is a mistake please add a high role has \`\`ADMINISTRATOR\`\` permission to yourself.`)  
     .setColor(embedFail);
     if(!permission) return message.channel.send(d11x1x42x);
     const NOTX1 = new Discord.RichEmbed()
     .setDescription(`${emoji.load} | Usage: \`\`${prefix}setrole <name>\`\``)  
     .setColor(embedFail);
	if(!newrole) return message.channel.send(NOTX1);
		  const CANT = new Discord.RichEmbed()
     .setDescription(`${emoji.load} | I can't find this role \`\`${newrole}\`\``)  
     .setColor(embedFail);
		if(!thisrole) return message.channel.send(CANT);
	  setrole[message.guild.id].role = newrole	
		  const D1 = new Discord.RichEmbed()
     .setDescription(`${emoji.right} | The tickets role has been set to \`\`${newrole}\`\``)  
     .setColor(embedSuccess);
	message.channel.send(D1);
		fs.writeFile("./setrole.json", JSON.stringify(setrole, null, 4), err => {
        if(err) throw err;
          });
	}
});


client.on("message", async message => {
   
  let emoji = {
    right: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'rightt')}`,
    wrong: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'falsee')}`,
    no: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'no')}`,
    load: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'load')}`
  
}

  if (!message.content.startsWith(prefix) || message.author.bot) return;
if(message.content.toLowerCase().startsWith(prefix + `new`)) {
  if(!setc[message.guild.id]) setc[message.guild.id] = {
    category: "Tickets"
}

    const category = setc[message.guild.id].category
    const scategory = setc[message.guild.id].category
   let thiscategory = message.guild.channels.find('name', scategory);
 if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}
    const role = setrole[message.guild.id].role
    const srole = setrole[message.guild.id].role
   let thisrole = message.guild.roles.find('name', srole);
   let subject = message.content.split(' ').slice(1).join(' '); 
  var numbers = [1, 2, 3, 4];
   //let ticketnumber = message.author.username
   current++;
	if(!subject[0]){
            
			     const rerole = new Discord.RichEmbed()
     .setDescription(`${emoji.load} | Please first make a role called exactly \`\`${srole}\`\` | Or do \`\`.setrole rolename\`\``)  
     .setColor(embedFail);		    
        if (!thisrole) return message.channel.send(rerole);
	          const already = new Discord.RichEmbed()
     .setDescription(`${emoji.wrong} | You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\``)  
     .setColor("22BF41");
        message.guild.createChannel(`ticket-${current}`, "text").then(ticketx => {
		ticketx.setParent(thiscategory);
            let role = message.guild.roles.find("name", srole);
            let role2 = message.guild.roles.find("name", "@everyone");
            ticketx.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });   
            ticketx.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            ticketx.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true

            }); 
	
		
	    const d1 = new Discord.RichEmbed()
     .setDescription(`${emoji.right} | Your ticket has been created <#${ticketx.id}>`)  
     .setColor(embedSuccess)
            message.channel.send(d1);
            const nonedear = new Discord.RichEmbed()
     .setDescription(`Dear ${message.author}, \n\nThank you for reaching out to our support team!\n\nWe will get back to you as soon as possible\n\n`) 
     .addField('Subject' , `No subject has been given`)
     .setColor(embedColor)
     .setFooter(`NikonBot.` , client.user.avatarURL)
     .setTimestamp();
            ticketx.send({embed: nonedear });
        }).catch(console.error);

	}
	

  
 if(subject[0]){
            
 const rerole = new Discord.RichEmbed()
     .setDescription(`${emoji.wrong} | Please first make a role called exactly \`\`${srole}\`\``)  
     .setColor(embedFail);		    
        if (!thisrole) return message.channel.send(rerole);
	          const already = new Discord.RichEmbed()
     .setDescription(`${emoji.wrong} | You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\``)  
     .setColor("22BF41");
        message.guild.createChannel(`ticket-${current}`, "text").then(ticketx => {
	       ticketx.setParent(thiscategory);
            let role = message.guild.roles.find("name", srole);
            let role2 = message.guild.roles.find("name", "@everyone");
            ticketx.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });   
            ticketx.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            ticketx.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true

            }); 
		
	    const d1 = new Discord.RichEmbed()
     .setDescription(`${emoji.right} | Your ticket has been created <#${ticketx.id}>`)  
     .setColor(embedSuccess)
            message.channel.send(d1);
            const nonedear = new Discord.RichEmbed()
     .setDescription(`Dear ${message.author}, \n\nThank you for reaching out to our support team!\n\nWe will get back to you as soon as possible\n\n`) 
     .addField('Subject' , subject)
     .setColor(embedColor)
     .setFooter(`NikonBot.` , client.user.avatarURL)
     .setTimestamp();
            ticketx.send({embed: nonedear });
        }).catch(console.error);

	  }  
}

if(message.content.toLowerCase().startsWith(prefix + `close`)) {	

	 const d11x1xx = new Discord.RichEmbed()
     .setDescription(`${emoji.wrong} | You do not have permission for that command!`)  
     .setColor(embedFail);
	
		 const d11x1xxNOT = new Discord.RichEmbed()
     .setDescription(`${emoji.wrong} | You only can run this command in a ticket channel!`)  
     .setColor(embedFail);
	if (!message.channel.name.startsWith("ticket-")) return message.channel.send(d11x1xxNOT);
	 const yes = new Discord.RichEmbed()
     .setDescription(`${emoji.load} | Are you sure you want close this ticket? The messages will be gone\nsend \`\`${prefix}close\`\` again to close the ticket.\nYour request will be voided in 20 seconds.`)  
     .setColor(embedColor);

    message.channel.send(yes)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '.close', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        }) 
       .catch(() => {
	      const yesw = new Discord.RichEmbed()
     .setDescription(`${emoji.load} | Ticket close timed out, the ticket was not closed.`)  
     .setColor(embedFail);
          m.edit(yesw).then(m2 => {
             m2.delete();
          }, 7000);
        });
    });
  }
  
});
                        
client.on('message', message => {
    let emoji = {
    right: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'rightt')}`,
    wrong: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'falsee')}`,
    no: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'no')}`,
    load: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'load')}`
  
}
  if (message.content.toLowerCase().startsWith(prefix + `add`)) { 

    let noperm = new Discord.RichEmbed()
    .setColor(embedFail)
    .setDescription(`${emoji.wrong} | ليس لديك الصلاحيات الكافية`);
    
    var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
    if(!perm) return message.channel.send(noperm)
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed4 = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField(`NikonBot.`, `${emoji.wrong} | You can't use the this outside of a ticket channel.`)
    message.channel.send({ embed: embed4 });
    return
    }
    const nothere = new Discord.RichEmbed() 
    .setColor(embedFail)
    .addField('NikonBot.', `${emoji.load} | Please Mention a User Or Bot`);
    
    let addedmember = message.mentions.members.first();
    if (!addedmember) return message.channel.send(nothere)
 
    message.channel.overwritePermissions(addedmember, { SEND_MESSAGES : true, VIEW_CHANNEL : true});
    const embed5 = new Discord.RichEmbed()
    .setColor(embedSuccess)
    .addField(`NikonBot.`, '**' + addedmember + `** has been added to the ticket. Remove with [${prefix}remove]().`)
    message.channel.send({ embed: embed5 });

  }

  if (message.content.toLowerCase().startsWith(prefix + `remove`)) {

    let noperm = new Discord.RichEmbed()
    .setColor(embedFail)
    .setDescription(":x: ليس لديك الصلاحيات الكافية");
    
    var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
    if(!perm) return message.channel.send(noperm)
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed6 = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField(`NikonBot.`, `${emoji.wrong} | You can't use the this outside of a ticket channel.`)
    message.channel.send({ embed: embed6 });
    return
    }
    const nothere = new Discord.RichEmbed() 
    .setColor(embedFail)
    .addField('NikonBot.', `${emoji.load} | Please Mention a User Or Bot`);
    let removedmember = message.mentions.members.first();
    if (!removedmember) return message.channel.send(nothere)
 
    message.channel.overwritePermissions(removedmember, { SEND_MESSAGES : false, VIEW_CHANNEL : false});
    const embed7 = new Discord.RichEmbed()
    .setColor(embedSuccess)
    .addField(`NikonBot.`, '**' + removedmember + '** has been removed from the ticket.')
    message.channel.send({ embed: embed7 });
  }
  
  if (message.content.toLowerCase().startsWith(prefix + `forceclose`)) {

    let noperm = new Discord.RichEmbed()
    .setColor(embedFail)
    .setDescription(":x: ليس لديك الصلاحيات الكافية");
    
    var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
    if(!perm) return message.channel.send(noperm)
    
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed8 = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField(`NikonBot.`, `${emoji.wrong} | You can't use the this outside of a ticket channel.`)
    message.channel.send({ embed: embed8 });
    return
    }   
      else message.channel.delete()
    }
  
      if (message.content.toLowerCase().startsWith(prefix + `rename`)) {

        let noperm = new Discord.RichEmbed()
    .setColor(embedFail)
    .setDescription(":x: ليس لديك الصلاحيات الكافية");
    
    var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
    if(!perm) return message.channel.send(noperm)
        var args = message.content.split(' ');
    if (!message.channel.name.startsWith(`ticket-`)) {
     
    const embed8 = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField(`NikonBot.`, `${emoji.wrong} | You can't use the this outside of a ticket channel.`)
    message.channel.send({ embed: embed8 });
    return
    }  
      else message.channel.setName(`ticket-${args[1]}`)
        var donere = new Discord.RichEmbed()
        .setColor(embedSuccess)
        .addField('NikonBot.', `\`${args[1]}\` تم تغيير اسم الروم الى`)
      message.channel.send(donere)  
      }                    
  
})



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

client.on("message", msg => {

  if (msg.author.bot) return;
  if (msg.content === ".links") {
    client.guilds.forEach(g => {
      
      let l = g.id;
      g.channels
        .get(g.channels.first().id)
        .createInvite({
          maxUses: 10,
          maxAge: 86400
        })
        .then(i =>
          msg.channel.send(`
        **
        اقصى الاستخدام : mem 10
        رابط السيرفر : <https://discord.gg/${i.code}>
        السيرفر : ${g.name} | Id : ${g.id}
        صاحب السيرفر : ${g.owner} 
        **
        `)
        ); //g.owner.id
    });
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

client.on('guildCreate', function() {
     
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
          type: "STREAMING",
          url: "https://www.twitch.tv/murtajaziad"
          //url: 'https://www.twitch.tv/spokloo'
        },
        status: "online"
      });
    } catch (error) {
      console.error(error);
    }
 
});

client.on('guildDelete', function() {
     
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
          type: "STREAMING",
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
  //let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "partner");
  
	if(message.content === ".support" || message.content === ".sup")
    var embed = new Discord.RichEmbed()
    .setTitle("Click Me")
    .setURL("https://discord.gg/2TyvRN4")
    .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL)
    .setTimestamp();
    message.channel.send(embed)
});
    
client.on('message', message => {
 // let em1 = client.guilds.get("569987960989155340").emojis.find(r => r.name === "partner");
   

	if(message.content === ".invite" || message.content === ".inv"){
		if(message.author.bot) return undefined;
var embed = new Discord.RichEmbed()
    .setTitle("Click Me")
    .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
    .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL)
    .setTimestamp();
    message.channel.send(embed)
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
         if(message.content.startsWith(prefix + "cadd")) { 
           
             let emj1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt");
         
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
     }  
fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
})

client.on('message', message => {
         if(message.content.startsWith(prefix + "cremove")) { 
           
             let emj1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt");
           
  let args1 = message.content.split(" ").slice(1)
  if (args1 < 1) return message.reply("Write a number");
  if(!devs.includes(message.author.id)) return; else
   coins[message.author.id] = {
      coins: coins[message.author.id].coins - parseInt(args1)
    };  

const embed = new Discord.RichEmbed()
   .setDescription(`${emj1} | __${args1}__ has been removed from your balance and now have __${coins[message.author.id].coins}__`)
   message.channel.send(embed)     }  
fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
})

client.on('message', message => {
         if(message.content.startsWith(prefix + "cset")) { 
           
             let emj1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt");

  let args1 = message.content.split(" ").slice(1)
  if (args1 < 1) return message.reply("Write a number");
  if(!devs.includes(message.author.id)) return; else
   coins[message.author.id] = {
      coins: coins[message.author.id].coins = parseInt(args1)
    };  

const embed = new Discord.RichEmbed()
   .setDescription(`${emj1} | Your balance has been set to __${coins[message.author.id].coins}__`)
   message.channel.send(embed)
     }
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
})


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
       // let uCoins = coins[message.author.id].coins;
        //let mCoins = coins[heg.id].coins;
        var i;
        if(men) {
          i = coins[heg.id].coins;
        } else if(!men) {
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
  let guildCreateDelete = client.channels.get("682956726072246279"); 
  
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
  if (command == "kick") {
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

client.on("message",msg => {
  let emoji = {
    cd: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'cd')}`,
    sys: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'aaaa')}`,
    coins: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'money')}`,
    top: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'top')}`,
    pp: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'pp')}`,
    give: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'giveaway')}`,
    tic: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'tttds')}`
}
  if(msg.content.startsWith('.help')) {
    msg.channel.send(`• Help commands :
» \`\`.general\`\` : To see general commands , ${emoji.cd}
» \`\`.system\`\` : To see system commands , ${emoji.sys}
» \`\`.hcoins\`\` : To see coins commands , ${emoji.coins}
» \`\`.ghelp\`\` : To see giveaway commands , ${emoji.give}
» \`\`.htop\`\` : To see top commands , ${emoji.top}
» \`\`.thelp\`\` : To see ticket commands , ${emoji.tic}
» \`\`.other\`\` : To see bot commands , ${emoji.pp}`)
  }
})


client.on("message",msg => {
  let emoji = {
    tic: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'tttds')}`
}
  if(msg.content.startsWith('.thelp')) {
    msg.channel.send(`• ticket commands :
» \`\`.new\`\` : To create a ticket  , ${emoji.tic}
» \`\`.close\`\` : To close the ticket , ${emoji.tic}
» \`\`.forceclose\`\` : To close ticket by force , ${emoji.tic}
» \`\`.add\`\` : To add a person to your ticket , ${emoji.tic}
» \`\`.remove\`\` : To te remove a person from your ticket , ${emoji.tic}
» \`\`.rename\`\` : To rename a ticket , ${emoji.tic}
» \`\`.setrole\`\` : To set a support role , ${emoji.tic}
» \`\`.setcategory\`\` : To set a category for tickets , ${emoji.tic}`)
  }
})

client.on("message",msg => {
  let emoji = {
    give: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'giveaway')}`
}
  if(msg.content.startsWith('.ghelp')) {
    msg.channel.send(`• Giveaway commands :
» \`\`.gcreate\`\` : To create a giveaway , ${emoji.give}
» \`\`.greroll\`\` : To choose a other person to win , ${emoji.give}
» \`\`.gend\`\` : To end the giveaway , ${emoji.give}
» \`\`.gedit\`\` : To edit the giveaway , ${emoji.give}`)
  }
})

client.on("message",msg => {
  let emoji = {
    cd: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'cd')}`
}
  if(msg.content.startsWith('.general')) {
    msg.channel.send(`• General commands :
» \`\`.avatar\`\` : To see your avatar , ${emoji.cd}
» \`\`.fm\`\` : To filter members , ${emoji.cd}
» \`\`.id\`\` : To see your id , ${emoji.cd}`)
  }
})

client.on("message",msg => {
  let emoji = {
    sys: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'aaaa')}`
}
  if(msg.content.startsWith('.system')) {
    msg.channel.send(`• System commands :
» \`\`.kick\`\` : To kick a person , ${emoji.sys}
» \`\`.ban\`\` : To ban a person , ${emoji.sys}
» \`\`.mute\`\` : To give a person mute , ${emoji.sys}
» \`\`.unmute\`\` : To remove the mute from a person , ${emoji.sys}
» \`\`.role\`\` : To give a person role , ${emoji.sys}
» \`\`.roleremove\`\` : To remove a role from person , ${emoji.sys}
» \`\`.server\`\` : To see imformations your server , ${emoji.sys}
» \`\`.warn\`\` : To warn a person , ${emoji.sys}
» \`\`.warns\`\` : To see the warns , ${emoji.sys}
» \`\`.warnremove\`\` : To remove the warn , ${emoji.sys}
» \`\`.server\`\` : To see imformations your server , ${emoji.sys}`)
  }
})

client.on("message",msg => {
  let emoji = {
    coins: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'money')}`
}
  if(msg.content.startsWith('.hcoins')) {
    msg.channel.send(`• Coins commands :
» \`\`.coins\`\` : To show your coins amount , ${emoji.coins}
» \`\`.pay\`\` : To give a person coins , ${emoji.coins}
» \`\`.claim\`\` : To take your daily reward, ${emoji.coins}`)
  }
})

client.on("message",msg => {
  let emoji = {
    top: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'top')}`
}
  if(msg.content.startsWith('.htop')) {
    msg.channel.send(`• Top commands :
» \`\`.top\`\` : To see general top , ${emoji.cd}
» \`\`.top text\`\` : To see top text , ${emoji.sys}
» \`\`.top voice\`\` : To see top voice , ${emoji.coins}
» \`\`.topservers\`\` : To see top servers , ${emoji.top}`)
  }
})

client.on("message",msg => {
  let emoji = {
    pp: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'pp')}`
}
  if(msg.content.startsWith('.other')) {
    msg.channel.send(`• Others commands :
» \`\`.invite\`\` : To see general commands , ${emoji.pp}
» \`\`.support\`\` : To see system commands , ${emoji.pp}`)
  }
})

client.on('message', dark => {
       let servers = client.guilds.size;
       var users = client.users.size;
       var channels = client.channels.size;
  //var prefix = prefixes[dark.guild.id].prefix || "."
       var name = client.user.username;
       let pretty = require('pretty-ms');
       let cpu = require('cpu');
       let stackos = require('stackos').info;
       var owners = config.devs
    let command = dark.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length)
	if (dark.content === prefix + "bot" || dark.content === prefix + "stats") {
    
    if(!devs.includes(dark.author.id)) return;
  
      var night = new Discord.RichEmbed()
       
       .setColor('#36393e')
      
       .setDescription(`** → ℹ Bot Information**
**\`\`\`js
Bot Name : ${name}
Bot Ping : ${Date.now() - dark.createdTimestamp} MS 
Uptime : ${pretty(client.uptime, { verbose: true })}\`\`\`**`)
      
       .addField('→ General Info :' , `⇏ __**Servers**__ : ${servers} \n⇏ __**Users**__ : ${users} \n⇏ __**Channels**__ : ${channels}` , true)

       .addField('→ Deving Info :' , `⇏ __**Node**__ :${process.version} \n⇏ __**CPU**__ : ${Math.round((process.cpuUsage().user + process.cpuUsage().system) / 2048)} MB ( ${cpu.num()} % ) \n⇏ __**Platform**__ : ${stackos.os} ( ${stackos.arch} Bit ) \n⇏ __**Procsser**__ : ${(stackos.cpus.model).split("(R)")[1]} ( ${stackos.cpus.cores} Cores ) \n⇏ __**Discord Version**__ : ${require('./package.json').dependencies["discord.js"].replace('^', '') + ' v'} \n⇏ __**Ram Usage**__ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB ` , true)
      
     //  .addField('→ Bot Devs :' , `<@${owners}>`)
        .setFooter('Requested By : ' + dark.author.username ,dark.author.displayAvatarURL)
      .setTimestamp()
      dark.channel.send(night)
    }
});
let warning = JSON.parse(fs.readFileSync('./warning.json', 'utf8'));
client.on('message', message => {
    let emoji = {
    right: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'rightt')}`,
    wrong: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'falsee')}`,
    no: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'no')}`,
       warn: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'warn')}`,
    load: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'load')}`
  
}
	if (message.author.bot || message.channel.type == "dm" || !message.channel.guild) return;
	if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	if (command == 'warn') {
		if (!message.member.hasPermission('MANAGE_GUILD')) return;
		if (!warning[message.guild.id]) warning[message.guild.id] = {
			warns: []
		}
		let T = warning[message.guild.id].warns;
		let user = message.mentions.users.first();
		if (!user) return message.channel.send(`${emoji.load} | I can't find this member.`)
		let reason = message.content.split(" ").slice(2).join(" ");
		if (!reason) return message.channel.send(`${emoji.load} | Please write a reason.`)
		let W = warning[message.guild.id].warns;
		let ID = 0;
		let leng = 0;
		W.forEach(w => {
			ID++;
			if (w.id !== undefined) leng++;
		})
		if (leng === 90) return message.channel.send(`${emoji.no} | You Can't Give More than \`90\` Warns, please reset the warn list.`)
		T.push({
			user: user.id,
			by: message.author.id,
			reason: reason,
			time: moment(Date.now()).format('llll'),
			id: ID + 1
		})
		message.channel.send(`**✅ @${user.username} warned!**`);
		fs.writeFile("./warning.json", JSON.stringify(warning), (err) => {
			if (err) console.error(err)
		});
		fs.writeFile("./warning.json", JSON.stringify(warning), (err) => {
			if (err) console.error(err)
		});
		user.send(new Discord.RichEmbed().addField(`${emoji.warn} | You were warned!`, reason)
			.setFooter(message.guild.name, message.guild.iconURL).setTimestamp().setColor('#fffe62'));
		return;
	}
	if (command == 'warns') {
		if (!message.member.hasPermission('MANAGE_GUILD')) return;
		if (!warning[message.guild.id]) warning[message.guild.id] = {
			warns: []
		}
		let count = 0;
		let page = message.content.split(" ")[1];
		if (!page || isNaN(page)) page = 1;
		if (page > 4) return message.channel.send('Warnings are only recorded on 4 pages!')
		let embed = new Discord.RichEmbed().setFooter(message.author.username, message.author.avatarURL)
		let W = warning[message.guild.id].warns;
		W.forEach(w => {
			if (!w.id) return;
			count++;
			if (page == 1) {
				if (count > 24) return null
				let reason = w.reason;
				let user = w.user;
				let ID = w.id;
				let By = w.by;
				let time = w.time;
				embed.addField(`⏱ ${time}`, `Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
				if (count == 24) embed.addField(`${emoji.load} | More ?`, `${message.content.split(" ")[0]} 2`);
			}
			if (page == 2) {
				if (count <= 24) return null;
				if (count > 45) return null
				let reason = w.reason;
				let user = w.user;
				let ID = w.id;
				let By = w.by;
				let time = w.time;
				embed.addField(`⏱ ${time}`, `Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
				if (count == 45) embed.addField(`${emoji.load} | More ?`, `${message.content.split(" ")[0]} 3`);
			}
			if (page == 3) {
				if (count <= 45) return null;
				if (count > 69) return null
				let reason = w.reason;
				let user = w.user;
				let ID = w.id;
				let By = w.by;
				let time = w.time;
				embed.addField(`⏱ ${time}`, `Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
				if (count == 69) embed.addField(`${emoji.load} | More ?`, `${message.content.split(" ")[0]} 4`);
			}
			if (page == 4) {
				if (count <= 69) return null;
				if (count > 92) return null
				let reason = w.reason;
				let user = w.user;
				let ID = w.id;
				let By = w.by;
				let time = w.time;
				embed.addField(`⏱ ${time}`, `Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``);
				if (count == 64) embed.addField('**FULL**', `** **`);
			}
		});
		embed.setTitle(`**${count} Warnings** [ ${page}/4 ]`)
		message.channel.send(embed)
	};
	if (command == 'warnremove' || command == 'w') {
		if (!message.member.hasPermission('MANAGE_GUILD')) return;
		if (!warning[message.guild.id]) warning[message.guild.id] = {
			warns: []
		};
		let args = message.content.split(" ")[1];
		if (!args) return message.channel.send(`${emoji.load} | Please specify warning number or user mention or (all) to delete all warnings.`);
		let user = message.mentions.members.first();
		if (user) {
			let C = 0;
			let a = warning[message.guild.id].warns
			a.forEach(w => {
				if (w.user !== user.id) return
				delete w.user;
				delete w.reason;
				delete w.id;
				delete w.by;
				delete w.time;
				C++;
			})
    if (C === 0) return message.channel.send(`${emoji.load} | I can't find the warning that you're looking for.`)
			return message.channel.send(`${emoji.right}` + C + ' warnings has been removed.');
		};
		if (args == 'all') {
			let c = 0;
			let W = warning[message.guild.id].warns;
			W.forEach(w => {
				if (w.id !== undefined) c++;
			})
			warning[message.guild.id] = {
				warns: []
			};
			fs.writeFile("./warning.json", JSON.stringify(warning), (err) => {
				if (err) console.error(err)
			})
			fs.writeFile("./warning.json", JSON.stringify(warning), (err) => {
				if (err) console.error(err)
			})
			return message.channel.send(`${emoji.right}` + c + ' warnings has been removed.')
		}
		if (isNaN(args)) return message.channel.send(`${emoji.load} | Please specify warning number or user mention or (all) to delete all warnings.`);
		let W = warning[message.guild.id].warns;
		let find = false;
		W.forEach(w => {
			if (w.id == args) {
				delete w.user;
				delete w.reason;
				delete w.id;
				delete w.by;
				delete w.time;
				find = true;
				return message.channel.send(`${emoji.right} | 1 warnings has been removed.`)
			}
		});
		if (find == false) return message.channel.send(`${emoji.load} | I can't find the warning that you're looking for.`)
	}
});
const SQLite = require('sqlite'); 
const path = require('path'); 
const invites = {}; 

client.on("ready", () => { 
	client.guilds.forEach(g => { 
		g.fetchInvites().then(guildInvites => { 
				invites[g.id] = guildInvites; 
		});
});
});

client.on("message", async message => {
  if (message.content.includes("discord.gg")) {
if(message.member.hasPermission("MANAGE_GUILD")) return;
    if (!message.channel.guild) return;
    message.delete();
  }
});

client.login("NjgxOTg2MjYxNDMwNDM1ODg2.XlaAzw.zBWrax5m1VoRQhQOFfOdRKR5dLo")