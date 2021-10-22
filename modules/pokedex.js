
const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');
const https = require('https');
const fetch = require('node-fetch');


const { getRandomInt }  = require('./randomint')


function inputhandle (message){

    pokeid = message.content.split(" ")[1]

    if (pokeid === "random" || pokeid === "r"){
        randompokemon = getRandomInt(898)
        randompokemon++
        pokeid = randompokemon
    }

    shiny = 0
    shiny = message.content.split(" ")[2]

    icon = message.author.avatarURL

    sendtest(message, pokeid, shiny, icon)

}


async function embedconstr(id, icon, shiny){

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+id);
    const result = await response.json();

    sprite = result['sprites'].front_default
    if (shiny === 's'){
        sprite = result['sprites'].front_shiny
    }

    pokename = result['forms'][0].name.charAt(0).toUpperCase() + result['forms'][0].name.slice(1)
    weight = result.weight/10+" kg"
    height = result.height*10+" cm"
    buldagarden = "https://bulbapedia.bulbagarden.net/wiki/"+pokename+"_(Pokémon)"

    type1 = result['types'][0]['type'].name.charAt(0).toUpperCase() + result['types'][0]['type'].name.slice(1)
    if (typeof result['types'][1] !== 'undefined'){
        type2 = " + "+result['types'][1]['type'].name.charAt(0).toUpperCase() + result['types'][1]['type'].name.slice(1)
    }
    else{type2 = ""}

    //return pokename, weight, height, buldagarden

    embed = {
        title: pokename,
        color: 14191372,
        author: {
            name: "Pokemon",
            icon: icon               
        },
        image: {
            url: sprite
            },
        fields:[
            { name: 'ID', value: result.id},
            { name: 'Typ', value: type1 + type2},
            { name: 'Grössi', value: height, inline: true },
            { name: 'Gwicht', value: weight, inline: true },
            { name: 'Bulbagarden', value: buldagarden},
        ]  
    };

    return embed

}

async function sendtest(message, pokeid, shiny, icon){

    let embed = await embedconstr(pokeid, icon, shiny);

    var sentmsg = await message.channel.send(".");
    sentmsg.edit("", {embed})
        .then((reactcheck) => {
        reactcheck.react("⬅️")
        .then(() => reactcheck.react('➡️'))
    
        const filter = (reaction, user) => {
            return ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

    reactcheck.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();

        if (reaction.emoji.name === '⬅️') {
            let newid = embed.fields[0].value-1
            editembed(message, sentmsg, newid)
                                
        } 
        else if (reaction.emoji.name === '➡️'){
            let newid = embed.fields[0].value+1
            editembed(message, sentmsg, newid)

        }
        })
        .catch(collected => {
            return
        });
    })

}

async function editembed(message, sentmsg, id){


    let embed = await embedconstr(id, message.author.avatarURL);

    await sentmsg.reactions.get("➡️").remove(message.author)
    await sentmsg.reactions.get("⬅️").remove(message.author)

    sentmsg.edit("", {embed})
        .then((reactcheck) => {
        reactcheck.react("⬅️")
        .then(() => reactcheck.react('➡️'))
    
        const filter = (reaction, user) => {
            return ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

    reactcheck.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();

        if (reaction.emoji.name === '⬅️') {
            let newid = embed.fields[0].value-1
            editembed(message, sentmsg, newid)                        
        } 
        else if (reaction.emoji.name === '➡️'){
            
            let newid = embed.fields[0].value+1
            editembed(message, sentmsg, newid)
        }
        })
        .catch(collected => {
            return
    });
    })
}


module.exports = { inputhandle }