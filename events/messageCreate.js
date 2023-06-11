const { Events } = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
    execute(message) {
        const fs = require('fs');
        const support = JSON.parse(fs.readFileSync('./data/support.json', 'utf8'));
        for (var i = 0; i < support.length; i++) {
            // check if message is not from a bot
            if (message.author.bot) return;
            if (message.content.toLowerCase().includes(support[i].keyword)) {
                message.reply(support[i].response);
            }
        }
    },
    };