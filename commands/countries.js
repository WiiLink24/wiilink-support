const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('countries')
		.setDescription('Supported countries'),
	async execute(interaction) {
		await interaction.reply('# Supported countries\nDemae Deliveroo supports all countries supported by Deliveroo itself.\n## Europe\n- United Kingdom\n- France\n- Belgium\n- Ireland\n- Italy\n## Asia\n- Singapore\n- Hong Kong\n- the U.A.E\n- Kuwait\n- Qatar\n## Formerly supported\nThe following countries **used to** be supported, but not anymore.\n- Germany\n- Taiwan\n- Spain\n- the Netherlands\n- Australia');
	},
};