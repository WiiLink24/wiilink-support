const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('installguide')
		.setDescription('Deliveroo install guide'),
	async execute(interaction) {
		await interaction.reply("# Install guide\n\nhttps://pabloscorner.github.io/demae-dominos-guide/deliveroo");
	},
};