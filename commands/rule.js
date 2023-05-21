const { SlashCommandBuilder } = require('discord.js');

// ask for the rule number
module.exports = {
	data: new SlashCommandBuilder()
		.setName('rule')
		.setDescription('Get a rule')
		.addIntegerOption(option => option.setName('number').setDescription('Rule number').setRequired(true)),
	async execute(interaction) {
		const ruleNumber = interaction.options.getInteger('number');
		if (ruleNumber < 1 || ruleNumber > 10) {
			await interaction.reply('Invalid rule number. Please choose a number between 1 and 10.');
			return;
		}
		if (ruleNumber === 1) {
			await interaction.reply('**1** Participation in raids (Organized trolling, repeated spam, repeated pings)');
			return;
		}
		if (ruleNumber === 2) {
			await interaction.reply('**2** The use of derogatory slurs (whether sexist, racist, homophobic, transphobic, ableist, or otherwise), or any targeted harassment/discrimination towards a particular person or minority group.');
			return;
		}
		if (ruleNumber === 3) {
			await interaction.reply('**3** Evading moderation actions (bans, kicks, timeouts, etc.) with alternate accounts or other loopholes.');
			return;
		}
		if (ruleNumber === 4) {
			await interaction.reply('**4**  Posting content that features nudity, heavy sexually suggestive themes, drug use, blood/gore, animal cruelty, and/or anything else that may be considered  18+ or NSFW (Not Safe for Work)');
			return;
		}
		if (ruleNumber === 5) {
			await interaction.reply('**5**  Being in this server while being under the age of 13, as this breaks Discord\'s Terms of Service.');
			return;
		}
		if (ruleNumber === 6) {
			await interaction.reply('**6**  Harassing WiiLink Staff or Developers for service ETA\'s or support (This includes repeated pings and DM\'s).');
			return;
		}
		if (ruleNumber === 7) {
			await interaction.reply('**7**  Arguing with WiiLink Staff about moderation actions, whether or not they apply to you.');
			return;
		}
		if (ruleNumber === 8) {
			await interaction.reply('**8**  Spamming for absolutely no reason, including in DMs. This also includes posting memes in off-topic which do not pertain to the current conversation.');
			return;
		}
		if (ruleNumber === 9) {
			await interaction.reply('**9**  Unauthorized advertising (Ex. invites to other Discord guilds as we are unable to check their content)');
			return;
		}
		if (ruleNumber === 10) {
			await interaction.reply('**10**  Discussing or promoting copyrighted infringement or pirated content such as "warez" or ROMs. This includes piracy websites, ROM files or private SDK\'s.');
			return;
		}
	},
};
