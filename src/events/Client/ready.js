
const { Activity } = require("discord.js");

module.exports = {
  name: "ready",
  run: async (client) => {
    console.log(`${client.user.username} online!`, "ready");
    console.log(
      `Ready on ${
        client.guilds.cache.size
      } servers, for a total of ${client.guilds.cache.reduce(
        (a, g) => a + g.memberCount,
        0
      )} users`,
      "ready"
    );

    //Game
    let statuses = ["Lost Night", `HAH`];
    setInterval(function () {
      let status = statuses[Math.floor(Math.random() * statuses.length)];
      client.user.setActivity(status, { type: Activity.Playing });
      client.user.setStatus("DND");
    }, 10000);
  },
};