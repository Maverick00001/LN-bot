const { EmbedBuilder, CommandInteraction, Client } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Displays the bot's ping.",
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */

  run: async (client, interaction) => {
    await interaction.deferReply({
      ephemeral: false,
    });
    await interaction.editReply({ content: "ayo!" })
  },
};