/**
 * 
 * Node Packages Used:
 * discord.js
 * dotenv
 *
 */
// Basic file system usages
const path = require('path');
const fs = require('node:fs');
// Environment variables - process.env.VARNAME
require('dotenv').config();
// Discord.js imports
const { Client, Collection, Events, GatewayIntentBits, IntentsBitField } = require("discord.js");

/**
 *
 * Bot Configuration
 * 
 */
// Initializes the client
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.MessageContent],
});

// Start a big collection containing all our commands
client.commands = new Collection();
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

// Read our folders and instantiate the collection
for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`,
      );
    }
  }
}

/**
 * 
 * Define bot behavior
 *
 */
// Call on the associated command when an interaction is generated
client.on(Events.InteractionCreate, async (interaction) => {
  // Consider using if (interaction.isButtion()) if handling those
  if (!interaction.isChatInputCommand()) return;
  const command = interaction.client.commands.get(interaction.commandName);
  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }
  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }
});

/**
 * 
 * Define event listeners
 *
 */
// Define startup behavior
client.once(Events.ClientReady, (c) => {
  console.log(`${c.user.tag} ready and logged in`);
});

/**
 * 
 * EOF
 *
 */

// TODO:
// Change variable to match your .env variable
client.login(process.env.DISCORD_BOT_TOKEN); 