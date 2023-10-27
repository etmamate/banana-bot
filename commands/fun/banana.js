const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('banana')
        .setDescription('say banana'),
    async execute(interaction) {
        await interaction.reply(':banana:');
    },
};