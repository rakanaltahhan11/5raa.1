const Discord = require("discord.js");
const fs = require("fs");
const coins = require("../coins.json");

var prefix = ".";




module.exports.run = async (client, message, args, lang) => {
  
  if(!message.content.includes(prefix)) return;
  //!pay @isatisfied 59345

  //let em1 = bot.guilds.get("569987960989155340").emojis.find(r => r.name === "no");
  
  
  
  if(!coins[message.author.id]){
    return message.reply(`:x: | **You don't have any coins**.`)
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args);
  
  let embedo4 = new Discord.RichEmbed()
  .setColor("#f30707")
  .setDescription(`:x: | **You Must Mention a user**.`);
  
  if(!pUser) return message.channel.send(embedo4)

  if(!coins[pUser.id]){
   coins[pUser.id] = {
     coins: 0
   };
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  let embedo1 = new Discord.RichEmbed()
  .setColor("#f30707")
  .setDescription(`:x: | **You Don't have enough coins**.`);
  
  let embedo2 = new Discord.RichEmbed()
  .setColor("#f30707")
  .setDescription(`:x: | **You Can't transfer Coins to yourself**.`);
  
  let embedo3 = new Discord.RichEmbed()
  .setColor("#f30707")
  .setDescription(`:x: | **You Must transfer Coins above __\`1\`__**.`);
  
  let embedo5 = new Discord.RichEmbed()
  .setColor("#f30707")
  .setDescription(`:x: | **You Must put a number**.`);
  
  if(isNaN(args[1])) return message.channel.send(embedo5)
  if(args[1] == undefined) return message.channel.send(embedo5)
  if(sCoins < args[1]) return message.channel.send(embedo1)
  if(args[1] < 1) return message.channel.send(embedo3)
  if(message.author.id === pUser.id) return message.channel.send(embedo2)
  if(!pUser) return message.channel.send(embedo4)

  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };
  
  var tax = args[1] * 5/100

  if(args[1] >= 100000) {
    coins[pUser.id] = {
    coins: pCoins + parseInt(args[1]) - parseInt(tax)
  };
  }
  
  if(args[1] >= 100000) {
  var embed = new Discord.RichEmbed()
  .setTitle("Coins Transference")
  .setColor("#36393e")
  .addField("Sender", `<@${message.author.id}>`)
  .addField("To", `${pUser}`)
  .addField("Amount", `\`\`${args[1] - parseInt(tax)}\`\``)
  .addField("Tax", `\`5%\``)
  .addField("Tax Amount", `\`${tax}\``)
  .setTimestamp()
  
  
  
  message.channel.send(embed)
    
    var embed1 = new Discord.RichEmbed()
  .setTitle("Coins Transference")
  .setColor("#36393e")
  .addField(`Coins Recieved`, `\`${args[1] - parseInt(tax)}\``)
  .addField("Tax", `\`5%\``)  
  .addField("Tax Amount", `\`${tax}\``)
  .addField("From", `${message.author.id}`)
  .addField("His ID", `${message.author.id}`)
  .addField("Server name", `${message.guild.name}`)
  
  pUser.send(embed1)
    
    let embed3 = new Discord.RichEmbed()
  
  .setTitle("New Coins Transference")
  .setColor("#36393e")
  .addField("From", `<@${message.author.id}>`)
  .addField("Sender ID", `${message.author.id}`)
  .addField("To", `${pUser}`)
  .addField("Reciever ID", `${pUser.id}`)
  .addField("Amount", `\`${args[1] - parseInt(tax)}\``)
  .addField("Tax on it", `\`5%\``)
  .addField("Tax Amount", `\`${tax}\``)
  .addField("Server Name", `${message.guild.name}`)
  .setTimestamp()
  
  client.channels.get("657259147485511689").send(embed3)
    
  } else {
    var embed = new Discord.RichEmbed()
  .setTitle("Coins Transference")
  .setColor("#36393e")
  .addField("Sender", `<@${message.author.id}>`)
  .addField("To", `${pUser}`)
  .addField("Amount", `\`\`${args[1]}\`\``)
  .addField("Tax", `\`0%\``)
  .setTimestamp()
  
  
  
  message.channel.send(embed)
    
    var embed1 = new Discord.RichEmbed()
  .setTitle("Coins Transference")
  .setColor("#36393e")
  .addField(`Coins Recieved`, `\`${args[1]}\``)
  .addField("Tax", `\`0%\``)
  .addField("From", `<@${message.author.id}>`)
  .addField("His ID", `${message.author.id}`)
  .addField("Server name", `${message.guild.name}`)
  
  pUser.send(embed1)
    
    let embed3 = new Discord.RichEmbed()
  
  .setTitle("New Coins Transference")
  .setColor("#36393e")
  .addField("From", `<@${message.author.id}>`)
  .addField("Sender ID", `${message.author.id}`)
  .addField("To", `${pUser}`)
  .addField("Reciever ID", `${pUser.id}`)
  .addField("Amount", `\`${args[1]}\``)
  .addField("Tax on it", `\`0%\``)
  .addField("Server Name", `${message.guild.name}`)
  .setTimestamp()
  
  client.channels.get("657259147485511689").send(embed3)
    
  }
  //message.channel.send(`${message.author} has given ${pUser} ${args[1]} NCoins.`);
  
  
fs.writeFile("/coins.json", JSON.stringify(coins), (err) => {
if (err) message.channel.send(err)
})
  


}

module.exports.help = {
  name: "pay"
}