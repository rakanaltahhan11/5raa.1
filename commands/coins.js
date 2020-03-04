
const Discord = require("discord.js");
const coins = require("../coins.json")
const fs = require("fs")


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
  .setDescription(`${em1} | **__${message.author.username}__ has : \`\`€${uCoins}\`\`**`)
  .setFooter(`${message.author.tag}`, message.author.avatarURL)

message.channel.send(coinEmbed)
  } else if (men) {
    let mCoins = coins[message.mentions.users.first().id].coins
    let coinEmbed = new Discord.RichEmbed()
  //.setAuthor(men.username)
  //.setThumbnail(men.avatarURL)
  .setColor("#36393e")
  .setDescription(`${em1} | **__${men.username}__ has : \`\`€${mCoins}\`\`**`)
      .setFooter(`${men.tag}`, men.avatarURL)


message.channel.send(coinEmbed)
  }
  fs.writeFile("/coins.json", JSON.stringify(coins), (err) => {
if (err) console.error(err)
})
}

module.exports.help = {
  name: "coins"
}


/*const Discord = require("discord.js");
const fs = require("fs");
//const coins = JSON.parse(fs.readFileSync("coins.json"))
const coins = require("../coins.json");


var prefix = ".";




module.exports.run = async (client, message, args, lang) => {
  if(!message.content.includes(prefix)) return;
  //!coins
 //let em1 = bot.guilds.get("569987960989155340").emojis.find(r => r.name === "money");
 
   var user = message.mentions.users.first();
  var user1 = message.mentions.users.size;
  
  
  
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 150
    };
  }
  
 
  let uCoins = coins[message.author.id].coins;
  //let mCoins = coins[user.id].coins;
  
  //let men = message.mentions.users.first()
  
  
 
  

    let coinEmbed1 = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setThumbnail(message.author.avatarURL)
  .setColor("#00FF00")
  .setDescription(`💰 | **\`\`${uCoins}\`\`**`)
  
 message.channel.send(coinEmbed1)
  
  fs.writeFile("/coins.json", JSON.stringify(coins), (err) => {
if (err) message.channel.send(err)
})


}

module.exports.help = {
  name: "coins" // لا تسوي شي  سويت هل كوماند  بل server.js
}*/

/*const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
  
    let em1 = bot.guilds.get("677267870471684096").emojis.find(r => r.name === "dollar");

  
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
*/