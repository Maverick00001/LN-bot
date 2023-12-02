const { EmbedBuilder, CommandInteraction, Client, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "gping",
  description: "cmd to ping events role",
  options: [
    {
      name: "mega",
      description: "mega gaw ping",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
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
      ]
    },
    {
      name: "normal",
      description: "normal gaw ping",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
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
      ]
    }, 
    {
      name: "flash",
      description: "flash gaw ping",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
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
      ]
    },     
  ],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */

  run: async (client, interaction) => {

    let guildA = client.guilds.cache.get("1135552057034686505");
    let requiredRole = guildA.roles.cache.get("1175803405139202109");
    let member = guildA.members.cache.get(interaction.user.id);
    if (!member.roles.cache.has(requiredRole.id)) return interaction.reply({ content: "You are not authorized to run this command."})
    const donor = interaction.options.getUser("donor");
    const message = interaction.options.getString("message");
    const prize = interaction.options.getString("prize");

    const subcommand = interaction.options.getSubcommand();
    if(subcommand == "mega") {
      const em = new EmbedBuilder()
    .setTitle("New Giveaway!!")
    .setDescription(`**Don't forget to thank the donor!**\n> **Giveaway Type:** Mega Giveaway\n> **Donor**: ${donor}\n> **Prize**: ${prize}\n> **Message:** ${message}`)
    .setThumbnail(`https://media0.giphy.com/media/KBIzfEK5kikIUiNaGP/200w.gif?cid=6c09b9524z6hox6rjupb7273rz9wrpscpc95fle4rhy5h1ql&ep=v1_gifs_search&rid=200w.gif&ct=g`)
    .setFooter({ text: `Keep donating for future giveaways <3` })
    
    
    await interaction.reply({ content: `<@&1149221655311294484>`, embeds: [em] })
  
    } else if(subcommand == "normal") {
      const em = new EmbedBuilder()
    .setTitle("New Giveaway!!")
    .setDescription(`**Don't forget to thank the donor!**\n> **Giveaway Type:** Normal Giveaway\n> **Donor**: ${donor}\n> **Prize**: ${prize}\n> **Message:** ${message}`)
    .setThumbnail(`https://media0.giphy.com/media/KBIzfEK5kikIUiNaGP/200w.gif?cid=6c09b9524z6hox6rjupb7273rz9wrpscpc95fle4rhy5h1ql&ep=v1_gifs_search&rid=200w.gif&ct=g`)
    .setFooter({ text: `Keep donating for future giveaways <3` })
    
    
    await interaction.reply({ content: `<@&1149224519177875467>`, embeds: [em] })
    } else if(subcommand == "flash") {
      const em = new EmbedBuilder()
    .setTitle("New Giveaway!!")
    .setDescription(`**Don't forget to thank the donor!**\n> **Giveaway Type:** Flash Giveaway\n> **Donor**: ${donor}\n> **Prize**: ${prize}\n> **Message:** ${message}`)
    .setThumbnail(`https://media0.giphy.com/media/KBIzfEK5kikIUiNaGP/200w.gif?cid=6c09b9524z6hox6rjupb7273rz9wrpscpc95fle4rhy5h1ql&ep=v1_gifs_search&rid=200w.gif&ct=g`)
    .setFooter({ text: `Keep donating for future giveaways <3` })
    
    
    await interaction.reply({ content: `<@&1135552057068228692>`, embeds: [em] })
    }
  },
};