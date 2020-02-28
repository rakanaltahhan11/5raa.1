
const Discord = require("discord.js");
const fs = require("fs")
const coins = require("../coins.json");

module.exports.run = async (client, message, args) => {
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
  let em1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "dollar");
  
  
  let men = message.mentions.users.first()
  
  

  let uCoins = coins[message.author.id].coins;
  
  if (!men) {


  let coinEmbed = new Discord.RichEmbed()
  //.setAuthor(message.author.username)
  //.setThumbnail(message.author.avatarURL)
  .setColor("#36393e")
  .setDescription(`${em1} | **__${message.author.username}__ has : \`\`${uCoins}€\`\`**`)
  .setFooter(`${message.author.tag}`, message.author.avatarURL)

message.channel.send(coinEmbed)
  } else if (men) {
    let mCoins = coins[message.mentions.users.first().id].coins
    let coinEmbed = new Discord.RichEmbed()
  //.setAuthor(men.username)
  //.setThumbnail(men.avatarURL)
  .setColor("#36393e")
  .setDescription(`${em1} | **__${men.username}__ has : \`\`${mCoins}€\`\`**`)
      .setFooter(`${men.tag}`, men.avatarURL)


message.channel.send(coinEmbed)
  }
  
}

module.exports.help = {
  name: "coins"
}
