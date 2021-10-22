
function boomer(message){

    embed = {
    "title": "En Boomer",
    "description": "de Beni, en Boomer",
    "color": 14191372,
    "image": {
    "url": "https://www.psgn.ch/fileadmin/_processed_/2/f/csm_broeg.benjamin_0d72e56dab.png"
    }
    };
    message.channel.send("", { embed } );
}

module.exports = { boomer }


