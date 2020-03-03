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

const voiceonline = require ("./voiceonline.json");
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
        
        رابط السيرفر : <https://discord.gg/${i.code}>
        السيرفر : ${g.name} 
        Id : ${g.id}
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
          type: "LISTENING",
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
          type: "LISTINING",
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
          type: "LISTENING",
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
   
    if (message.content.startsWith('.verify')) {
 let em1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt"); 
    let em2 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "falsee"); 
        var activated_servers = ['681933999224258570'];

        if (activated_servers.includes('' + message.guild.id + '') || activated_servers.includes(message.guild.id)) {

            let guildr = client.guilds.filter(r => r.ownerID === message.author.id).size;
            if (guildr === 0) {
                message.channel.send(`**${em2} | You Aren't Owner Of Any Server Where Bot Is In It**`)

            } else if (guildr >= 1) {
                if (message.guild.member(message.author).roles.find(x => x.name === `Users`)) return message.channel.send(`**${em2} | You have This Role Already**`);;
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
    tic: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'tttds')}`,
     ac: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'rule')}`
}
  if(msg.content.startsWith('.help')) {
    msg.channel.send(`• Help commands :
» \`\`.general\`\` : To see general commands , ${emoji.cd}
» \`\`.system\`\` : To see system commands , ${emoji.sys}
» \`\`.hcoins\`\` : To see coins commands , ${emoji.coins}
» \`\`.ghelp\`\` : To see giveaway commands , ${emoji.give}
» \`\`.active\`\` : To see activaticon commands , ${emoji.ac}
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
    ac: `${client.guilds.find(r => r.id === '677267870471684096').emojis.find(e => e.name === 'rule')}`
}
  if(msg.content.startsWith('.active')) {
    msg.channel.send(`• Active commands :
» \`\`.setselfrole\`\` : To set self role , ${emoji.ac}
» \`\`.setvc\`\` : To set the voice online , ${emoji.ac}`)
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
» \`\`.clear\`\` : To clear the chat , ${emoji.sys}
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


const monsterking = JSON.parse(fs.readFileSync("./roleget.json", "utf8"));
  
client.on("message", monster =>{
let commandking = monster.content.split(" ")[0].slice(prefix.length);
let toxicmk = monster.content.split(" ").slice(1);
if(monster.author.bot || monster.channel.type == 'dm') return;
if(commandking === "setselfrole") {
    let newKing = toxicmk.join(" ");
    if(!monster.member.hasPermission("ADMINISTRATOR")) return monster.reply("You must have the **`ADMINISTRATOR`** permission!")
    if(!monster.guild.me.hasPermission("ADMINISTRATOR")) return monster.reply("I must have the **`ADMINISTRATOR`** permissions!")
    if(!monster.guild.roles.find(x => x.name === newKing)) return monster.reply("Usage: **`(role name)`**");
    if(monster.guild.roles.find(x => x.name === newKing).position >= monster.guild.me.highestRole.position) return monster.reply("My highgest role must be higher than the mentioned role!")
    monster.channel.send(`Successfully applied SelfRole to \`${newKing}\``)
    monsterking[monster.guild.id] = {
      guild: monster.guild.name,
      role: newKing
    }
    fs.writeFile("./roleget.json", JSON.stringify(monsterking, null, 4), err => {
        if(err) throw err;
          });
      }
});
client.on('message', monster => {
let commandking = monster.content.split(" ")[0].slice(prefix.length);
if(commandking === "selfrole"){
  if(monster.author.bot || monster.channel.type == 'dm') return;
  let rolegetid = monster.guild.roles.find(mk => mk.name === monsterking[monster.guild.id].role)
    if(!rolegetid) return monster.channel.send("Sorry But there's no selrole Command on our system activated!!")
        var mking = monster.member.roles.get(rolegetid.id);
        if(mking) {
          monster.channel.send(`${monster.author}, You've the role already`);
       }else{
         monster.member.addRole(rolegetid);
         monster.channel.send(`Done! ${monster.author}, You've Got the role: \`${rolegetid.name}\``);
        }
  }
});

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


const log = JSON.parse(fs.readFileSync('./log.json' , 'utf8'));
//Perfect log Code
client.on('message', message => {
    let em1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt");
    let room = message.content.split(" ").slice(1);
   
    if(message.content.startsWith(prefix + "setlog")) { 
if (message.author.bot) return;
        if(!message.channel.guild) return message.reply('**This Command is Just For Servers!**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if (!room) return message.channel.send('Please Type The Channel Name')

let embed = new Discord.RichEmbed()
.setDescription(`${em1} | **Done
\`\`\`js
Channel : ${room}\`\`\`**`)
.addField('Requested By:', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
log[message.guild.id] = {
channel: room,
onoff: 'On'
}
fs.writeFile("./log.json", JSON.stringify(log), (err) => {
if (err) console.error(err)
})
    }
})

client.on('message', message => {
    let em1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt");
    if(message.content.startsWith(prefix + "logtoggle")) {
if (message.author.bot) return;
        if(!message.channel.guild) 
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!log[message.guild.id]) log[message.guild.id] = {
          onoff: 'Off'
        }
          if(log[message.guild.id].onoff === 'Off') return [message.channel.send(`${em1} | **The Log Has been activated**`), log[message.guild.id].onoff = 'On']
          if(log[message.guild.id].onoff === 'On') return [message.channel.send(`${em1} | **Activation canceled**`), log[message.guild.id].onoff = 'Off']
          fs.writeFile("./log.json", JSON.stringify(log), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
         
        })
 
 
client.on('messageDelete', message => {
 
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
                        if(!log[message.guild.id]) log[message.guild.id] = {
          onoff: 'Off'
        }
    if(log[message.guild.id].onoff === 'Off') return;
    var logChannel = message.guild.channels.find(c => c.name === `${log[message.guild.id].channel}`);
    if(!logChannel) return;
 
    let messageDelete = new Discord.RichEmbed()
    .setTitle('**Message Deleted**')
    .setColor('RED')
    .setThumbnail(message.author.avatarURL)
    .setDescription(`:wastebasket: | **There Are A Message Was Deleted In ${message.channel} (\`\`${message.channel.name}\`\`) The Message Was Sent By : <@${message.author.id}> The Message :__\`\`\`${message}\`\`\`__**`)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL)
 
    logChannel.send(messageDelete);
});
client.on('messageUpdate', (oldMessage, newMessage) => {
 
    if(oldMessage.author.bot) return;
    if(!oldMessage.channel.type === 'dm') return;
    if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
                        if(!log[oldMessage.guild.id]) log[oldMessage.guild.id] = {
          onoff: 'Off'
        }
    if(log[oldMessage.guild.id].onoff === 'Off') return;
    var logChannel = oldMessage.guild.channels.find(c => c.name === `${log[oldMessage.guild.id].channel}`);
    if(!logChannel) return;
 

    let messageUpdate = new Discord.RichEmbed()
    .setTitle('**Message Edited**')
    
    .setColor('BLUE')
    .setDescription(`:link: | **There Are A Link Was Sent In ${oldMessage.channel} (\`\`${oldMessage.channel.name}\`\`) The Link Was Sent By: __<@${oldMessage.author.id}>__ \`\`\`${oldMessage}\`\`\`**`)
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
 
    logChannel.send(messageUpdate);
});
 
 
client.on('roleCreate', role => {
    let em1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt");


    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
            if(!log[role.guild.id]) log[role.guild.id] = {
          onoff: 'Off'
        }
    if(log[role.guild.id].onoff === 'Off') return;
    var logChannel = role.guild.channels.find(c => c.name === `${log[role.guild.id].channel}`);
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleCreate = new Discord.RichEmbed()
        .setTitle('**Role Created**')
        .setDescription(`${em1} | **There Is A Role Created.\nRole Name : __\`\`${role.name}\`\`__\nBy : __<@${userID}>__**`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleCreate);
    })
});
client.on('roleDelete', role => {
    let em1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt");


    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
            if(!log[role.guild.id]) log[role.guild.id] = {
          onoff: 'Off'
        }
    if(log[role.guild.id].onoff === 'Off') return;
    var logChannel = role.guild.channels.find(c => c.name === `${log[role.guild.id].channel}`);
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleDelete = new Discord.RichEmbed()
        .setTitle('**Role Deleted**')
        .setThumbnail(userAvatar)
        .setDescription(`${em1} | **There Is A Role Deleted.\nRole Name : __\`\`${role.name}\`\`__ \nBy: __<@${userID}>__ **`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleDelete);
    })
});
client.on('roleUpdate', (oldRole, newRole) => {
    let em1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "load");


    if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
            if(!log[oldRole.guild.id]) log[oldRole.guild.id] = {
          onoff: 'Off'
            }
    if(log[oldRole.guild.id].onoff === 'Off') return;
    var logChannel = oldRole.guild.channels.find(c => c.name === `${log[oldRole.guild.id].channel}`);
    if(!logChannel) return;
 
    oldRole.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldRole.name !== newRole.name) {
            if(log[oldRole.guild.id].onoff === 'Off') return;
            let roleUpdateName = new Discord.RichEmbed()
            .setTitle('**Role Name Update**')

            .setColor('BLUE')
            .setDescription(`${em1} | **There Is A Role Its Name Was Edited.\nOld Name : __\`\`${oldRole.name}\`\`__\*New Name : __\`\`${newRole.name}\`\`__\nBy : __<@${userID}>__**`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateName);
        }

    })
});
 
 
client.on('channelCreate', channel => {
    let em1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt");

    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
            if(!log[channel.guild.id]) log[channel.guild.id] = {
          onoff: 'Off'
        }
    if(log[channel.guild.id].onoff === 'Off') return;
    var logChannel = channel.guild.channels.find(c => c.name === `${log[channel.guild.id].channel}`);
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelCreate = new Discord.RichEmbed()
        .setTitle('**Channel Create**')

        .setDescription(`${em1} | **There Is A New Channel Was Created.\nIts Type : __${roomType}__ channel.\nChannel Name : __\`\`${channel.name}\`\`__\nBy :__<@${userID}>__**`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelCreate);
    })
});
client.on('channelDelete', channel => {
    let em1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt");
   
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
            if(!log[channel.guild.id]) log[channel.guild.id] = {
          onoff: 'Off'
        }
    if(log[channel.guild.id].onoff === 'Off') return;
    var logChannel = channel.guild.channels.find(c => c.name === `${log[channel.guild.id].channel}`);
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelDelete = new Discord.RichEmbed()
        .setTitle('**channel Deleted**')

        .setDescription(`${em1} | **There Is A Channel Was Deleted.\nIts Type : __${roomType}__ channel.\nChannel Name : __\`\`${channel.name}\`\`__\nBy : __<@${userID}>__**`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelDelete);
    })
});
client.on('channelUpdate', (oldChannel, newChannel) => {
    let em1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "load");

    if(!oldChannel.guild) return;
            if(!log[oldChannel.guild.id]) log[oldChannel.guild.id] = {
          onoff: 'Off'
        }
    if(log[oldChannel.guild.id].onoff === 'Off') return;
    var logChannel = oldChannel.guild.channels.find(c => c.name === `${log[oldChannel.guild.id].channel}`);
    if(!logChannel) return;
 
    if(oldChannel.type === 'text') {
        var channelType = 'Text';
    }else
    if(oldChannel.type === 'voice') {
        var channelType = 'Voice';
    }else
    if(oldChannel.type === 'category') {
        var channelType = 'Category';
    }
 
    oldChannel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldChannel.name !== newChannel.name) {
            let newName = new Discord.RichEmbed()
            .setTitle('**Channel Edited**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`${em1} | **There Is A Channel Was Edited\nIts Type : __${channelType}__ \nChannel Name\nOld Name : __\`\`${oldChannel.name}\`\`__\nNew Name : __\`\`${newChannel.name}\`\`__\nBy : __<@${userID}>__ **`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newName);
        }

    })
});
 
 
client.on('guildBanAdd', (guild, user) => {
 
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
            if(!log[guild.guild.id]) log[guild.guild.id] = {
          onoff: 'Off'
        }
    if(log[guild.guild.id].onoff === 'Off') return;
    var logChannel = guild.channels.find(c => c.name === `${log[guild.guild.id].channel}`);
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(userID === client.user.id) return;
 
        let banInfo = new Discord.RichEmbed()
        .setTitle('**Ban**')
        .setColor('DARK_RED')
        .setDescription(`:airplane: | **__${user.username}__ Took Ban From the server!\nUser : __<@${user.id}>__ By : __<@${userID}>__**`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(banInfo);
    
})});

client.on('guildBanRemove', (guild, user) => {
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
   if(!log[guild.guild.id]) log[guild.guild.id] = {
          onoff: 'Off'
        }
    if(log[guild.guild.id].onoff === 'Off') return;
    var logChannel = guild.channels.find(c => c.name === `${log[guild.guild.id].channel}`);
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(userID === client.user.id) return;
 
        let unBanInfo = new Discord.RichEmbed()
        .setTitle('**UnBan**')
        .setThumbnail(userAvatar)
        .setColor('GREEN')
        .setDescription(`:unlock: | **__${user.username}__ UnBan From the server\nUser : __<@${user.id}>__\nBy : __<@${userID}>__**`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(unBanInfo);
    })
});
client.on('guildUpdate', (oldGuild, newGuild) => {
    let em1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt");


    if(!oldGuild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldGuild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
                if(!log[oldGuild.guild.id]) log[oldGuild.guild.id] = {
          onoff: 'Off'
        }
    if(log[oldGuild.guild.id].onoff === 'Off') return;
    var logChannel = oldGuild.channels.find(c => c.name === `${log[oldGuild.guild.id].channel}`);
    if(!logChannel) return;
 
    oldGuild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldGuild.name !== newGuild.name) {
            let guildName = new Discord.RichEmbed()
            .setTitle('**Change Guild Name**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`${em1} | **Guild Name Was Changed.\nFrom : __\`\`${oldGuild.name}\`\`__\nTo : __\`\`${newGuild.name}\`\`__\nBy : __<@${userID}>__**`)
            .setTimestamp()
            .setFooter(newGuild.name, oldGuild.iconURL)
 
            logChannel.send(guildName)
        }
        if(oldGuild.region !== newGuild.region) {
            if(log[newGuild.regon.guild.id].onoff === 'Off') return;
            let guildRegion = new Discord.RichEmbed()
            .setTitle('**Change Guild Regin**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`:earth_asia: | **The Guild Regin Was Changed\nFrom : __${oldGuild.region}__\nTo : __${newGuild.region}__\nBy : __<@${userID}>__**`)
            .setTimestamp()
            .setFooter(oldGuild.name, oldGuild.iconURL)
 
            logChannel.send(guildRegion);
        }
    })
});
client.on('guildMemberUpdate', (oldMember, newMember) => {
    let em1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt");

    if(!oldMember.guild) return;
                if(!log[oldMember.guild.id]) log[oldMember.guild.id] = {
          onoff: 'Off'
        }
    if(log[oldMember.guild.id].onoff === 'Off') return;
    var logChannel = oldMember.guild.channels.find(c => c.name === `${log[oldMember, newMember.guild.id].channel}`);
    if(!logChannel) return;
 
    oldMember.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
        var userTag = logs.entries.first().executor.tag;
 

        if(oldMember.roles.size < newMember.roles.size) {
            let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
                            if(!log[oldMember.guild.id]) log[oldMember.guild.id] = {
          onoff: 'Off'
        }
            if(log[oldMember.guild.id].onoff === 'Off') return;
            let roleAdded = new Discord.RichEmbed()
            .setTitle('**Role Add**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('GREEN')
            .setDescription(`${em1} | **__${oldMember.user.username}__ Took A Role\nUser : __<@${oldMember.id}>__ \nRole : __\`\`${role.name}\`\`__ \nBy : __<@${userID}>__**`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(roleAdded);
        }
        if(oldMember.roles.size > newMember.roles.size) {
            let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
                            if(!log[oldMember.guild.id]) log[oldMember.guild.id] = {
          onoff: 'Off'
        }
            if(log[oldMember, newMember.guild.id].onoff === 'Off') return;
            let roleRemoved = new Discord.RichEmbed()
            .setTitle('**Role Remove**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('RED')
            .setDescription(`${em1} | **__${oldMember.user.username}__ Removed From Him A Role\nUser : __<@${oldMember.user.id}>__ \nRole : __\`\`${role.name}\`\`__ \nBy : __<@${userID}>__ **`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(roleRemoved);
        }
    })
    if(oldMember.guild.owner.id !== newMember.guild.owner.id) {
                    if(!log[oldMember.guild.id]) log[oldMember.guild.id] = {
          onoff: 'Off'
        }
        if(log[oldMember, newMember.guild.id].onoff === 'Off') return;
        let newOwner = new Discord.RichEmbed()
        .setTitle('**Guild Owner**')
        .setThumbnail(oldMember.guild.iconURL)
        .setColor('GREEN')
        .setDescription(`${em1} | **The OwnerShip Was Transfered.\nFrom : __<@${oldMember.user.id}>__ \nTo : __<@${newMember.user.id}>__**`)
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
 
        logChannel.send(newOwner);
    }
});
 

client.on('guildMemberAdd', member => {
    let em1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt");

    if(!member.guild) return;
                if(!log[member.guild.id]) log[member.guild.id] = {
          onoff: 'Off'
        }
    if(log[member.guild.id].onoff === 'Off') return;
    var logChannel = member.guild.channels.find(c => c.name === `${log[member.guild.id].channel}`);
    if(!logChannel) return;
 
    let fsf = new Discord.RichEmbed();
 fsf.setTimestamp();
 fsf.setColor('#056320');
fsf.setTitle('**Member Joined**')
  fsf.setAuthor(member.author.tag,member.author.avatarURL)
 fsf.setThumbnail(member.user.displayAvatarURL);
 fsf.addField(`${em1} | **Members Count** `,member.guild.members.size);
 fsf.addField(`Joined Discord From :`, `\`${moment(member.user.createdAt).format('D/M/YYYY h:m A')}\` \n**${moment(member.user.createdAt).locale("eg-eg").fromNow()}**`, true);
 logChannel.send(fsf)
});
 
 
 
client.on('guildMemberRemove', member => {
    let em1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt");

    if(!member.guild) return;
                if(!log[member.guild.id]) log[member.guild.id] = {
          onoff: 'Off'
        }
    if(log[member.guild.id].onoff === 'Off') return;
    var logChannel = member.guild.channels.find(c => c.name === `${log[member.guild.id].channel}`);
    if(!logChannel) return;
    let fsff = new Discord.RichEmbed();
 fsff.setTimestamp();
  fsff.setTitle('**Member Left**')
 fsff.setColor('#bc1010');
  fsff.setAuthor(member.author.tag,member.author.avatarURL)
 fsff.setThumbnail(member.user.displayAvatarURL);
 fsff.addField(`Members Count : `,member.guild.members.size);
 logChannel.send(fsff)
});
 
client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
 
    if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
                    if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
    if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
    var logChannel = voiceOld.guild.channels.find(c => c.name === `${log[voiceOld, voiceNew.guild.id].channel}`);
    if(!logChannel) return;
 
    voiceOld.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userTag = logs.entries.first().executor.tag;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
            let serverMutev = new Discord.RichEmbed()
            .setTitle('**Voice Mute**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
            .setColor('RED')
            .setDescription(`:shield: | **User : __${voiceOld}__ \nBy : __<@${userID}>__ \In : __\`\`${voiceOld.voiceChannel.name}\`\`__**`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverMutev);
        }
        if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
                            if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
            if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
            let serverUnmutev = new Discord.RichEmbed()
            .setTitle('**Voice UnMute**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
            .setColor('GREEN')
            .setDescription(`:microphone2: | **User : ${voiceOld} \nBy : __<@${userID}>__\nIn : __\`\`${voiceOld.voiceChannel.name}\`\`__**`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUnmutev);
        }
        if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
                            if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
            if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
            let serverDeafv = new Discord.RichEmbed()
            .setTitle('**Voice Deafen**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
            .setColor('RED')
            .setDescription(`:outbox_tray: | **User : __${voiceOld}__\nBy : __<@${userID}>__\nIn : __\`\`${voiceOld.voiceChannel.name}\`\`__**`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverDeafv);
        }
        if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
                            if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
            if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
            let serverUndeafv = new Discord.RichEmbed()
            .setTitle('**VOICE UNDEAF**')
            .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
            .setColor('GREEN')
            .setDescription(`:inbox_tray: | **User : __${voiceOld}__ \nBy : __<@${userID}>__ \nIn : __\`\`${voiceOld.voiceChannel.name}\`\`__ **`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUndeafv);
        }
    })
   
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
                        if(!log[voiceOld.guild.id]) log[voiceOld.guild.id] = {
          onoff: 'Off'
        }
        if(log[voiceOld, voiceOld.guild.id].onoff === 'Off') return;
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[CHANGED VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`:satellite: | **There Is One Changed His Voice Room.\nFrom : __\`\`${voiceOld.voiceChannel.name}\`\`__\nTo : __\`\`${voiceNew.voiceChannel.name}\`\`__\nUser : __${voiceOld}__**`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    }
});

client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix + `top-servers`)) {

        const top = client.guilds.sort((a, b) => a.memberCount - b.memberCount).array().reverse()
        message.channel.send(`**⇏ Top 25 Servers: **\n1. **${top[0].name}**: ${top[0].memberCount} \n2. **${top[1].name}**: ${top[1].memberCount}.\n3. **${top[2].name}**: ${top[2].memberCount}.\n4. **${top[3].name}**: ${top[3].memberCount}.\n5. **${top[4].name}**: ${top[4].memberCount}.\n6. **${top[5].name}**: ${top[5].memberCount}.\n7. **${top[6].name}**: ${top[6].memberCount}.\n8. **${top[7].name}**: ${top[7].memberCount}.\n9. **${top[8].name}**: ${top[8].memberCount}.\n10. **${top[9].name}**: ${top[9].memberCount} .`)
    }
});

client.login(process.env.BOT_TOKEN)