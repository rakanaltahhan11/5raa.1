const Discord = require("discord.js")
const client = new Discord.Client()
let dailycooldown = new Set();
let dailycdseconds = 86400;
const fs = require("fs");
const coins = require("../coins.json");


var prefix = ".";




module.exports.run = async (client, message, args, lang) => {
  
  let em2 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "rightt");
let em1 = client.guilds.get("677267870471684096").emojis.find(r => r.name === "falsee");

  if(!message.content.includes(prefix)) return;
  let auth = message.author
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let auth2 = message.author.username
let E002 = "`You must wait 24 hours between uses`"
const embedSuccess = "#22BF41";
const embedFail = "#f30707";
  let amount = Math.floor(Math.random() * 1000) + 300

    if(dailycooldown.has(message.author.id)){
      let EE002 = new Discord.RichEmbed()
      .setColor(embedFail)
      .setTitle("Error")
  .setDescription(`${em1} | An error occurred when attempting to perform that request. Please check the Syntax and try again.\nError: ${E002}`)
      return message.channel.send(EE002)
    }
    else { 
      let dUser = message.author.id
      let dCoins = coins[message.author.id].coins;
      let dailyEmbed = new Discord.RichEmbed()
    .setColor(embedSuccess)
    .setTitle("Success!")
    .setDescription(`${em2} | You have claimed your daily reward of \`${amount}\` coins!`)
  message.channel.send(dailyEmbed)
  coins[dUser] = {
    coins: dCoins + parseInt(amount)
  };
  dailycooldown.add(message.author.id);
  setTimeout(() => {
    dailycooldown.delete(message.author.id)
  }, dailycdseconds * 1000)
    }

  fs.writeFile("/coins.json", JSON.stringify(coins), (err) => {
if (err) message.channel.send(err)
})
  
}
  

module.exports.help = {
  name: "claim",
  aliases: ["d"]
}