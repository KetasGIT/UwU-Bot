const fetch = require('node-fetch');

const kanyetriggers = [
    "west",
    "kanye",
    "rap",
    "glitch",
    "donda",
    "graduation",
    "ye",
    "religion",
    "haters",
    "love",
    "tribe",
    "generous",
    "pride",
    "sins",
    "heart",
    "passion",
    "lunch",
    "two"
]
    
function kanyequote(message){
    fetch(`https://api.kanye.rest/`)
        .then(response => {
            return response.json()
        }).then(result => {
            message.channel.send(result.quote+"\n- Kanye West")
        })
}


module.exports = { kanyetriggers, kanyequote }