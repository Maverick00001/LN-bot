const { EmbedBuilder, CommandInteraction, Client, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "eping",
  description: "cmd to ping events role",
  options: [
    {
      name: "type",
      description: "Type of event being hosted",
      required: true,
      type: ApplicationCommandOptionType.String,
    },
    {
        name: "donor",
        description: "Name of the donor",
        required: true,
        type: ApplicationCommandOptionType.User,
    },
    {
        name: "prize",
        description: "Prize of the event",
        required: true,
        type: ApplicationCommandOptionType.String,
    },
    {
        name: "message",
        description: "message of the donor",
        required: true,
        type: ApplicationCommandOptionType.String,
    },
    
  ],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */

  run: async (client, interaction) => {

    let guildA = client.guilds.cache.get("1135552057034686505");
    let requiredRole = guildA.roles.cache.get("1175803321701900369");
    let member = guildA.members.cache.get(interaction.user.id);
    if (!member.roles.cache.has(requiredRole.id)) return interaction.reply({ content: "You are not authorized to run this command."})

    const eventType = interaction.options.getString("type");
    const donor = interaction.options.getUser("donor");
    const message = interaction.options.getString("message");
    const prize = interaction.options.getString("prize");

    const em = new EmbedBuilder()
    .setTitle("Time For New Event!!")
    .setDescription(`**Don't forget to thank the donor!**\n> **Event Type:** ${eventType}\n> **Donor**: ${donor}\n> **Prize**: ${prize}\n> **Message:** ${message}`)
    .setThumbnail(`https://i.pinimg.com/originals/60/8f/cb/608fcb5878113362ae2ea6d9033f120a.gif`)
    .setFooter({ text: `Keep donating for future events <3` })
    
    
    await interaction.reply({ content: `<@&1149221796399284234>, head to <#1150762252727750763>`, embeds: [em] })
  
  },
};