const MusicClient = require('./structures/Client');
new MusicClient().start(process.env.BOT_TOKEN, `./commands`)
