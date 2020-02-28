const Discord = require('discord.js');

exports.run = (client, message, args) => {

    var user = message.mentions.users.first() || message.author;

    if (user.presence.game.name === 'Spotify' && user.presence.game.type === 2) {
        
            var trackImg = user.presence.game.assets.largeImageURL;
            var trackUrl = `https://open.spotify.com/track/${user.presence.game.syncID}`;
            var trackName = user.presence.game.details;
            var trackAlbum = user.presence.game.assets.largeText;
            var trackAuthor = user.presence.game.state;

            const embed = new Discord.RichEmbed()
                .setAuthor('Spotify track info')
                .setColor('FF0000')
                .setThumbnail(trackImg)
                .setDescription(`
\`🎵\` **Song name :**  \`${trackName}\`
\`📀\` **Album :**  \`${trackAlbum}\`
\`🎤\` **Author(s) :**  \`${trackAuthor}\`
`)
                .addField('Listen to this track :', `[${trackUrl}](${trackUrl})`, false);

            return message.channel.send(embed);

      

    } else {
        return message.channel.send(`${user.username} is not listening to spotify`);
    }
};

exports.help ={
  name: "spotify"
}