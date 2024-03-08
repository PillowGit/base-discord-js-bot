/**
 *
 * Slash Command Function example
 *
 */
// Necessary import to help build a slash command
const { SlashCommandBuilder } = require("discord.js");
// Use nodes wait function for our ping command
const wait = require("node:timers/promises").setTimeout;

// Exporting the following command:
module.exports = {
  // Use SlashCommandBuilder() in the .data to define command properties
  // such as name, description, options, etc.
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Reports the bots ping"),
  // The execute function is called when the command is used by a user, data is
  // passed via the interaction object. If you'd like more info, pass the
  // actual client object through the execute call in index.js and add a
  // parameter for it here, then you can do things like client.fetch(info)
  // For more info on the interaction object, see:
  // https://discordjs.guide/message-components/interactions.html#responding-to-component-interactions
  async execute(interaction) {
    const ms_diff = Date.now() - interaction.createdAt.getTime();
    await interaction.reply({
      content: ms_diff.toString().concat("ms"),
    });
    await wait(6000);
    await interaction.deleteReply();
  },
};

