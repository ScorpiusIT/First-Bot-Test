require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ["MESSAGE"]
});

const BOT_PREFIX = '!';
const MOD_ME_COMMAND = 'mod-me';

client.on('ready', () => {
    console.log('Our bot is ready to go');
});

client.on('messageDelete', msg => {
    msg.channel.send('Stop deleting messages');
});

client.on('message', msg => {
    if (msg.content == 'I love WDS') {
        msg.react('❤️');
    }
    
    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
        modUser(msg.member);
        // msg.member.roles.add('783453467128627231');
        // msg.channel.send("Not tagged");
        // msg.reply('Pong!');
    }
});

function modUser(member) {
    member.roles.add('783453467128627231');
}

function removeModUser(member) {
    member.roles.remove('783453467128627231');
}

client.login(process.env.BOT_TOKEN);