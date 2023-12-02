const {
    Client,
    Collection,
    GatewayIntentBits,
    Partials,
  } = require("discord.js");
  
  class LnBot extends Client {
    constructor() {
      super({
        failIfNotExists: true,
        allowedMentions: {
          parse: ["everyone", "roles", "users"],
        },
        intents: [
          GatewayIntentBits.Guilds,
          GatewayIntentBits.MessageContent,
          GatewayIntentBits.GuildVoiceStates,
          GatewayIntentBits.GuildMessages,
          GatewayIntentBits.DirectMessages,
          GatewayIntentBits.GuildInvites,
        ],
        partials: [
          Partials.Channel,
          Partials.Message,
          Partials.User,
          Partials.GuildMember,
        ],
      });
      this.commands = new Collection();

      /**
       * @typedef {Object} ApplicationCommandInterface A base command interface with keys and their value literals.
       * @property {string} name Name for the command.
       * @property {string} description Description for the command.
       * @property {boolean} player Whether or not a player should exist for the command to execute.
       * @property {boolean} dj Whether or not the member should be a dj to execute the command.
       * @property {boolean} inVoiceChannel Whether or not the executor should be in a voice channel for the command to execute.
       * @property {boolean} sameVoiceChannel Whether or not the executor should be in the same voice channel as the client.
       */
  
      /**
       * @type {Collection<string, ApplicationCommandInterface>}
       */
      this.slashCommands = new Collection();
      this.owner = "hah";
      this.aliases = new Collection();
      this.commands = new Collection();
      if (!this.token) this.token = this.config.token;
  
      this.rest.on("rateLimited", (info) => {
        console.log(info);
      });
  
      ["slashCommand", "events"].forEach((handler) => {
        require(`../handlers/${handler}`)(this);
      });
    }
    connect() {
      return super.login(this.token);
    }
  }
  
  module.exports = LnBot;