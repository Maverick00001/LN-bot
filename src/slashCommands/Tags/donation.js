const { EmbedBuilder, CommandInteraction, Client, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "donate",
  description: "cmd to donate money!",
  options: [
    {
      name: "giveaway",
      description: "donate for giveaways",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: "amount",
          description: "amount to be donated",
          required: true,
          type: ApplicationCommandOptionType.String,
      },
      {
          name: "requirement",
          description: "requirement of the event",
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
      name: "events",
      description: "events donation",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
            name: "amount",
            description: "amount to be donated",
            required: true,
            type: ApplicationCommandOptionType.String,
        },
        {
            name: "requirement",
            description: "requirement of the event",
            required: true,
            type: ApplicationCommandOptionType.String,
        },
        {
            name: "event-type",
            description: "type of event you wanna host e.g rumble etc",
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
      name: "heist",
      description: "heist donations",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
            name: "amount",
            description: "amount to be donated",
            required: true,
            type: ApplicationCommandOptionType.String,
        },
        {
            name: "requirement",
            description: "requirement of the event",
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

    const requirement = interaction.options.getString("requirement");
    const message = interaction.options.getString("message");
    const amount = interaction.options.getString("amount");
    const eventType = interaction.options.getString("event-type");

    const subcommand = interaction.options.getSubcommand();
    if(subcommand == "giveaway") {
      const em = new EmbedBuilder()
    .setTitle("New Giveaway Donation!!")
    .setDescription(`**New donation request!**\n> **Donation Type:** Giveaway\n> **Donor**: ${interaction.user}\n> **Amount**: ${amount}\n> **Requirements**: ${requirement}\n> **Message:** ${message}`)
    .setThumbnail(`https://media0.giphy.com/media/KBIzfEK5kikIUiNaGP/200w.gif?cid=6c09b9524z6hox6rjupb7273rz9wrpscpc95fle4rhy5h1ql&ep=v1_gifs_search&rid=200w.gif&ct=g`)
    .setFooter({ text: `Thank you for donating <3` })
    
    
    await interaction.reply({ content: `<@&1175803405139202109>`, embeds: [em] })
  
    } else if(subcommand == "events") {
        const em = new EmbedBuilder()
        .setTitle("New Event Donation!!")
        .setDescription(`**New donation request!**\n> **Donation Type:** Events\n> **Donor**: ${interaction.user}\n> **Amount**: ${amount}\n> **Requirements**: ${requirement}\n> **Event Type**: ${eventType}\n> **Message:** ${message}`)
        .setThumbnail(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAAQFLJA6_A-ufPH2f7Elao3iyKzDtFTGKElNll69h&s`)
        .setFooter({ text: `Thank you for donating <3` })
    
    
    await interaction.reply({ content: `<@&1175803321701900369>`, embeds: [em] })
    } else if(subcommand == "heist") {
        const em = new EmbedBuilder()
        .setTitle("New Heist Donation!!")
        .setDescription(`**New donation request!**\n> **Donation Type:** Heist\n> **Donor**: ${interaction.user}\n> **Amount**: ${amount}\n> **Requirements**: ${requirement}\n> **Message:** ${message}`)
        .setThumbnail(`https://media.tenor.com/vb7oSAu2Dd4AAAAM/jschlatt.gif`)
        .setFooter({ text: `Thank you for donating <3` })
    
    
    await interaction.reply({ content: `<@&1159853516135862363>`, embeds: [em] })
    }
  },
};