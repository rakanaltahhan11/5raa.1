const Discord = require("discord.js")
const client = new Discord.Client();
const prefix = ".";
const fs = require("fs");
const giveaways = require("discord-giveaways")
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://nikonbott.glitch.me/`);
}, 280000);


var prfx = "."

client.on('ready', () => {
    console.log("I'm ready !");
    giveaways.launch(client, {
        updateCountdownEvery: 5000,
        botsCanWin: false,
        ignoreIfHasPermission: [
            "MANAGE_MESSAGES",
            "MANAGE_GUILD",
            "ADMINISTRATOR"
        ],
        embedColor: "#FF0000",
        embedColorEnd: "#000000",
        reaction: "🎉",
        storage: __dirname+"/giveaways.json"
    });
});


client.on("message", (message) => {
 
    const ms = require("ms"); 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "create"){
     
 
                         let time = args[0];
                      let winners = args[1];
                      let prize = args.slice(2).join(" ")
                      if (!time || !winners || !prize) return message.reply(`Wrong Use | Usage : \n .gcreate <time> <winners> <prize>`)
                      if (isNaN(winners)) return message.reply(`Winner Need To Be Number`)
                      if (!time) return message.reply(`1s , 1m , 1h , 1w , 1mo`)
      
giveaways.start(message.channel, {
    time: ms(args[0]),
    prize: args.slice(2).join(" "),
    winnersCount: parseInt(args[1]),
    messages: {
        giveaway: "🎉🎉  **GIVEAWAY** 🎉🎉",
        giveawayEnded: "@everyone\n\n🎉🎉 **GIVEAWAY ENDED** 🎉🎉",
        timeRemaining: "Time remaining: **{duration}**!",
        inviteToParticipate: "React with 🎉 to participate!",
        winMessage: "Congratulations, {winners}! You won **{prize}**!",
        embedFooter: "Giveaways",
        noWinner: "No Winner.",
        winners: "winner(s)",
        endedAt: "Ended at",
        units: {
            seconds: "seconds",
            minutes: "minutes",
            hours: "hours",
            days: "days"
        }
    }
});
    }
});


client.on("message", (message) => {
 
    const ms = require("ms"); 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "reroll"){
        let messageID = args[0];
      if(!messageID) messageID = "**None**";
        giveaways.reroll(messageID).then(() => {
            message.channel.send("Success! Giveaway rerolled!");
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
    }
 
});

client.on("message", (message) => {
 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "edit"){
        let messageID = args[0];
        giveaways.edit(messageID, {
            newWinnersCount: 3,
            newPrize: "New Prize!",
            addTime: 5000
        }).then(() => {
            message.channel.send("Success! Giveaway updated!");
        }).catch((err) => {
                if(!messageID) messageID = "**None**";
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
    }
 
});

client.on("message", (message) => {
 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "end"){
        let messageID = args[0];
        giveaways.delete(messageID).then(() => {
            message.channel.send("Success! Giveaway Ended!");
        }).catch((err) => {
          if(!messageID) messageID = "**None**";
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
    }
 
});

client.login("NjgxOTg2MjYxNDMwNDM1ODg2.XlaAzw.zBWrax5m1VoRQhQOFfOdRKR5dLo")