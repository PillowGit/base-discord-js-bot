# Discord.js Bot Template

## What does this template offer? 

- A basic Discord.js bot template, similar to what's taught in the [Discord.js starter guide](https://discordjs.guide/#before-you-begin)
- Comments to help keep a neat code structure and help you get started
- The file `dotenv-template` to help you create a `.env` file and encourage code safety
- The `run.sh` file which allows you to easily deploy your commands to test servers, deploy them globally, or run your bot's code
- The commands folder in which you place folders for command categories, and instantiate with `file_name.js` in each category for slash command organization
- The `index.js`, `global-deploy.js`, and `test-deploy.js` files which all automatically sync the commands found in your structured commands folder
- A basic `ping` slash command located in `commands/misc/ping.js` that has the bot report its ping & demonstrates the expected slash command structure

## Why use this template?

I made this template to make my life easy, and I'm sharing it to hopefully make life easy for anyone who is experienced
in making discord bots and just wants to clone a starter and get working right away. The nice thing is that all you have
to do is create a `.env` file, plug in your token, client ID, and server IDs, and you can instantly start working on a 
functioning bot! 

The convenience of having all of your slash commands structured and organized has made developing bots much easier and
at this point, I've used this template to write discord bots that have provided functionality to over 150k users. Any
beginner can pick up this template, read the [Discord.js bot guide](https://discordjs.guide/#before-you-begin), and 
start creating their very own discord bot with a strong basis.

## Usage

You may download either .zip file from the releases page, or you can fork & clone this repo

Create a `.env` if there isn't already one, and following the instructions in `.env` if you downloaded from zip, or follow the instructions in the `dotenv-template` to fill out your `.env`

Run `test-deploy.js` with node to sync your bots slash commands with your test servers

Run `global-deploy.js` with node to sync your bots slash commands with all servers

Run `index.js` with node to run your bot

Alternatively, just run `run.sh` to run any of these files easily
