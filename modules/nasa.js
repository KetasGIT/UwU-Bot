const fetch = require('node-fetch');

guildid = '534415184165470232'
channelid = '534423643837431808'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
url = "https://api.nasa.gov/planetary/apod?api_key=79T5Ck3husu3YxYYVeMEqqCMFGp0b77f9Zru8NMw"

function nasa(client){

    var guild = client.guilds.get(guildid);
    if(guild && guild.channels.get(channelid)){

        fetch(url)
        .then(response => {
            return response.json()
        }).then(result => {
            guild.channels.get(channelid).send("**Nasa Picture of the Day**\n"+result.title+"\n"+result.hdurl)
        })
        
    } else {
        console.log("nope");
    }

}

function nasapotd(message){

    fetch(url)
    .then(response => {
        return response.json()
    }).then(result => {
        message.channel.send("**Nasa Picture of the Day**\n"+result.title+"\n"+result.hdurl)
    })

}


module.exports = { nasa, nasapotd }