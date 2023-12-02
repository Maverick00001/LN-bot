const {
    CommandInteraction,
    InteractionType,
    PermissionFlagsBits,
    EmbedBuilder,
  } = require("discord.js");

  const LnBot = require("../../structures/Client");
  
  module.exports = {
    name: "interactionCreate",
    /**
     *
     * @param {LnBot} client
     * @param {CommandInteraction} interaction
     */
    run: async (client, interaction) => { 
  
      if (interaction.type === InteractionType.ApplicationCommand) {
        const command = client.slashCommands.get(interaction.commandName);
        if (!command) return;
  
        const embed = new EmbedBuilder().setColor("Red");
  
        if (command.botPerms) {
          if (
            !interaction.guild.members.me.permissions.has(
              PermissionsBitField.resolve(command.botPerms || [])
            )
          ) {
            embed.setDescription(
              `I don't have **\`${
                command.botPerms
              }\`** permission in ${interaction.channel.toString()} to execute this **\`${
                command.name
              }\`** command.`
            );
            return interaction.reply({ embeds: [embed] });
          }
        }
  
        if (command.userPerms) {
          if (
            !interaction.member.permissions.has(
              PermissionsBitField.resolve(command.userPerms || [])
            )
          ) {
            embed.setDescription(
              `You don't have **\`${
                command.userPerms
              }\`** permission in ${interaction.channel.toStrinf()} to execute this **\`${
                command.name
              }\`** command.`
            );
            return interaction.reply({ embeds: [embed] });
          }
        }
        try {
          await command.run(client, interaction);
        } catch (error) {
          if (interaction.replied) {
            await interaction
              .editReply({
                content: `An unexcepted error occured.`,
              })
              .catch(() => {});
          } else {
            await interaction
              .reply({
                ephemeral: true,
                content: `An unexcepted error occured.`,
              })
              .catch(() => {});
          }
          console.error(error);
        }
      }
  
      if (interaction.isButton()) {
        let data = await db3.findOne({ Guild: interaction.guildId });
        if (
          data &&
          interaction.channelId === data.Channel &&
          interaction.message.id === data.Message
        )
          return client.emit("playerButtons", interaction, data);
      }
    },
  };