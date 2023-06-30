const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    execute(message) {
        // Parse the support.json file
        const fs = require('fs');
        const support = JSON.parse(fs.readFileSync('./data/support.json', 'utf8'));
        
        // Read through the contents of the parsed data
        for (var i = 0; i < support.length; i++) {
            // Don't reply to bots
            if (message.author.bot) return;
            
            // Check if message contains keyword
            if (message.content.toLowerCase().includes(support[i].keyword)) {
                message.reply(support[i].response);
            }
        }
    },
};