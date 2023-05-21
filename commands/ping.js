const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Literally a ping command'),
	async execute(interaction) {
		await interaction.reply('pong!');
	},
};