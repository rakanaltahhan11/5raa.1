const Discord = require("discord.js")
const fs = require("fs");
const coins = require("../coins.json")
const config = require("../config.json");
const devs = config.devs;

module.exports.run = async (client, message, args, lang) => {


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
}

module.exports.help = {
  name: ""
}