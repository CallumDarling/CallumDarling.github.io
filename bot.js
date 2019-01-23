/**
 * A Bully Bot
 */

// Import the discord.js module
const Discord = require('discord.js');
var auth = require('./auth.json');
var user = null;

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
	 if (message.content.startsWith('@!bully')) {
		if(message.author.id==='260801001060040705'){
			user = message.mentions.users.first();
			message.reply('bullying commenced');
		}
	 }else if(message.author==user){
		 if(Math.random()<0.1){
			 message.delete();
		 };
	 }
    //message.channel.send('pong');
  });
client.login(auth.token);