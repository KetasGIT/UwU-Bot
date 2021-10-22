const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');
const https = require('https');
const fetch = require('node-fetch');
const cron = require('node-cron');

const ehrecd = new Set();

module.exports = { Discord }

const { getRandomInt } = require('./modules/randomint')
const { tarot } = require('./modules/tarot');
const { roccopic } = require('./modules/rocco')
const { ehrechance, giveehreto, ehrecheck, topehre, adminehre } = require('./modules/ehre')
const { vcsounds, arraysounds, amogus, amogustrigger } = require('./modules/vcsounds');
const { g55x2 } = require('./modules/55x2');
const { boomer } = require('./modules/boomer');
const { kanyetriggers, kanyequote } = require('./modules/kanye');
const { helpcommand, helpvc } = require('./modules/help');
const { inputhandle } = require('./modules/pokedex');
const { eightball } = require('./modules/8ball');
const { loginkey } = require('./modules/loginkey.js');
const { nasa, nasapotd } = require('./modules/nasa');


function funcping(message){
    if(message.content.startsWith("+ping")){
        random = getRandomInt(5)
        switch (random) {
            case 0: message.reply("Pong"); break;
            case 1: message.reply("Pog"); break;
            case 2: message.reply("Grüezi"); break;
            case 3: message.reply("Hallo Welt"); break;
            case 4: message.reply("Das macht dänn 5.-"); break;
        }
    }
}


client.on('message', async message => {

    //return if bot
    if (message.author.bot)return;

    //Ehre Chance mit Cooldown
    if (!ehrecd.has(message.author.id)) {
        ehrechance(message);
        ehrecd.add(message.author.id);
        setTimeout(() => {
        ehrecd.delete(message.author.id);
        }, 7000);
    }

    //Steppy du fucking Weeb
    if (message.author.id === "371742184875229186") {
        if (message.content.startsWith("http")) {
            message.reply("Du fucking Weeb")
        }
        else if (message.attachments.size > 0) {
            message.reply("Du fucking Weeb")
        }
    }

    //wa wotsch wänn tagged
    if (message.isMentioned(client.user) && !message.content.startsWith("+ehre") && !message.content.startsWith("+adm") && !message.content.startsWith("+give")){
        message.reply('wa wotsch?')
    }

    //rocco
    if (message.content.toLowerCase().includes('rocco')){
        roccopic(message);
    }

    //vc
    if (new RegExp(arraysounds.join("|")).test(message.content.toLowerCase())){
        vcsounds(message)
    }


    //amogus
    if (new RegExp(amogustrigger.join("|")).test(message.content)){
        amogus(message);
    }

    //dc bot from vc
    if (message.content.startsWith('dc')) {
        message.member.voiceChannel.leave();
    }


    //admehre check perms
    if(message.content.startsWith("+adm") && message.author.id === '155668953107005441'){
        adminehre(message);
    }

    //Kanyetrigger
    if (new RegExp(kanyetriggers.join("|")).test(message.content.toLowerCase())){
        kanyequote(message)
    }

    /*55x2
    if(message.content.startsWith("55x2")){
        g55x2(message);
    }
    */

    //switch all Befehl mit +
    if (message.content.startsWith("+")){

        messageinput = message.content.split(" ")[0].slice(1).toLowerCase()

        switch (messageinput) {
            case 'give':
                giveehreto(message)
                break;            
            case 'ping':
                funcping(message)
                break;   
            case 'tarot':
                tarot(message)
                break;   
            case 'ehre':
                ehrecheck(message);
                break;
            case 'topehre':
                topehre(message);
                break;
            case 'boomer':
                boomer(message);
                break;
            case 'help':
                helpcommand(message);
                break;
            case 'sounds':
                helpvc(message);
                break;
            case '8ball':
                eightball(message);
                break;
            case 'nasa':
                nasapotd(message);
                break;
            case 'poke':
                inputhandle(message, 0);
                break;
            default:
                return
        }     
    }



});



cron.schedule('30 18 * * *', () => {
    nasa(client)
    console.log(test)
});



client.on('ready', () => {
    client.user.setActivity('Nightcore', { type: 'LISTENING' });
  })

client.login(loginkey);