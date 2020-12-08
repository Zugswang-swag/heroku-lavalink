const Client = require('../structures/Client');
const { Message } = require('discord.js')
module.export = {
  name: `play`,
  /**
   * @param {Client} client
   * @param {Message} Message
   * @param {String[]} args
   */
  run: async(client, message, args) => {
    if(!args[0]) return message.channel.send(`Please give me a song name!`);
    if(!message.member.voice.channel) return message.channel.send(`Please be in a voice channel ${message.author.tag}`);
    const res = await client.music.searchAndPlay(client.music.shoukaku.getNode(), args.join(" "), `youtube`, message);
    message.channel.send(res.isPlaylist ? `Added the playlist ${res.playlistName} to the queue. The playlist has ${res.tracks.length}songs` : `${res.songInfo.title} was added to the queue`)
  }
}
