// require the discord.js and node-schedule module
const Discord = require('discord.js');
var schedule = require('node-schedule');

// create a new Discord client
const config = require('./config.json');
const client = new Discord.Client();

// Paste channel ID in here to change where the bot's messages are sent to
const idChannel = "753769873439719559";

// Text when the bot is turned online sent out to the server
let messageText = "```fix\n--Hello World--\n\nT.I. Bot Status: Online```";
messageText += "```\nProgrammed by: @ChaoZ\nDescription: Sends weekly reminders to sign up for the T\.I\. so Julian doesn't rule forever.```";
messageText += "```\nCommands:\n!time\n!author\n!help```";

let bioText = "```yaml\nAuthor: Noah Carlow\n\nGithub: https://github.com/NoahCarlow\nLinkedIn: https://www.linkedin.com/in/noah-carlow/```"

// Text to handle the reminder and official announcement message
let announcementText = "```fix\n--The T.I. Begins Today--\n\nMay the best player win!```";
let announcementTextEarly = "```fix\n--Reminder--\n\nThe T.I. shall take place tomorrow!```";


// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
    client.channels.cache.get(idChannel).send(messageText);

});

client.on('message', message => {
	if (message.content === '!time') {
        // send the time the T.I. is to be held
        message.channel.send("The T.I. will be held on **Saturday at 4:20pm**");
    }

    if (message.content === '!author') {
        // send the time the T.I. is to be held
        message.channel.send(bioText);
    }

    if (message.content === '!help') {
        // send the time the T.I. is to be held
        message.channel.send("no");
        message.react('😂');
    }

    // Sends out a reminder to the specified channel at 4:20pm on Friday
    schedule.scheduleJob('20 16 * * 5', function(){
        client.channels.cache.get(idChannel).send(announcementTextEarly);
    });

    // Sends out official message to the specified channel at 4:20pm on Saturday
    schedule.scheduleJob('20 16 * * 6', function(){
        client.channels.cache.get(idChannel).send(announcementText);
    });
});

// login to Discord with your app's token
client.login('NzUzNzY3MzYwODkyMjQwMDU1.X1q-jw.feWw7-pfzvWsrCPQgyqYUieRrDI');