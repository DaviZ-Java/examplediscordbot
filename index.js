const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '$';

bot.on('ready', () =>{
    console.log('bot is online!');
})
//commands 
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
//end of commands 
//reply to certain words
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
    if(message.content === "monkey"){
        message.channel.send("MONKY MONKY GANG BOIIIII!!!!!");
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
    if(message.content === "kys"){
        message.reply("stfu hoe");
    }
})

bot.on('message', message=>{
    if(message.content === "dance for me"){
        message.reply("https://tenor.com/view/dancing-excited-dance-dance-move-smile-gif-16099354");
    }
})
//end of reply to certain words
//welcome to new members
bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '𝙜𝙚𝙣𝙚𝙧𝙖𝙡');
    if (!channel) return;
    channel.send(`welcome sexy i am the server hoe god, ${member}`);
  });  
//end of welcome to new members
//join vc
bot.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
    if (message.content === '$join') {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
      } else {
        message.reply('join a vc, retard <3');
      }
    }
  });
//end of join vc
bot.login(process.env.token);   