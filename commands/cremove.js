const Discord = require("discord.js")
const fs = require("fs");
const coins = require("../coins.json")
const config = require("../config.json");
const devs = config.devs;

module.exports.run = async (client, message, args, lang) => {
  
  let emj1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt");
  
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
     
fs.writeFile("../coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  
}

module.exports.help = {
  name: "cremove",
  aliases: ["d"]
}