const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '$';

bot.on('ready', () =>{
    console.log('bot is online!');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'help':
            message.reply('go ask ur mom for help');
        break;
        case 'pornsites':
            message.channel.send('pornhub.com, redtube.com, xvideos.com');
        break;
        case 'clear':
            if(!args[1]) return message.reply('I could not clear that shit, you hoe')
            message.channel.bulkDelete(args[1]);
            message.reply('here daddy, i cleared the messages for u <3');
        break;
        case 'sex':
            message.channel.send("i'm here for sex!");
        break;
    }
})

bot.on('message', message=>{
    if(message.content === "Ugh Cringe"){
        message.reply("what do you want hoe?");
    }
})

bot.on('message', message=>{
    if(message.content === "daniel"){
        message.channel.send("betto!");
    }
})

bot.on('message', message=>{
    if(message.content === "nigga"){
        message.reply("get cancelled u fucking idiot");
    }
})

bot.on('message', message=>{
    if(message.content === "aids"){
        message.channel.send("is dumb");
    }
})

bot.on('message', message=>{
    if(message.content === "who's safa?"){
        message.reply("safi nascar");
    }
})

bot.on('message', message=>{
    if(message.content === "miranda"){
        message.channel.send("cosgrove");
    }
})

bot.on('message', message=>{
    if(message.content === "goodnight gang"){
        message.reply("goodnight lucy!");
    }
})

bot.on('message', message=>{
    if(message.content === "morning gang"){
        message.reply("morning lucy!");
    }
})

bot.on('message', message=>{
    if(message.content === "kasper"){
        message.reply("AKs are good! :sunglasses:");
    }
})

bot.on('message', message=>{
    if(message.content === "dance for me"){
        message.reply("https://tenor.com/view/dancing-excited-dance-dance-move-smile-gif-16099354");
    }
})

bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === '𝙜𝙚𝙣𝙚𝙧𝙖𝙡');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`welcome sexy i am the server hoe god, ${member}`);
  });  

bot.login(process.env.token);   