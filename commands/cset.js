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
      coins: coins[message.author.id].coins = parseInt(args1)
    };  
const embed = new Discord.RichEmbed()
   .setDescription(`${emj1} | Your balance has been set to __${coins[message.author.id].coins}__`)
   message.channel.send(embed)
//message.channel.send(`You set you Coins to __${coins[message.author.id].coins}__**.**`)
     
  fs.writeFile("../coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  
}

module.exports.help = {
  name: "cset",
  aliases: ["d"]
}