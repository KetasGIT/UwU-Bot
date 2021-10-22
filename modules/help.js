

function helpcommand (message) {

    embed = {
        title: "Hilfe",
        color: 14191372,
        author: {
            name: "UwU Bot",
            icon_url: message.author.avatarURL,                 
        },
        fields:[
            { name: '+ping', value: 'spielt ping pong'},
            { name: '+tarot', value: 'zieht e Tarot Karte'},
            { name: '+ehre [@benutzer]', value: 'zeigt wie viel Ehre du und die andere Globis händ'},
            { name: '+give [Anzahl]  [@Benutzer]', value: 'So chasch öpperem Ehre gäh'},
            { name: '+topehre', value: 'Ehrerangliste'},
            { name: '+boomer', value: 'de Beni, en Boomer'},
            { name: '+sounds', value: 'die Sprüch chani säge'},
            { name: '+8ball [frage]', value: 'Frög de UwU Bot mit sinere infinite wisdom'},
        ]
    };

    message.channel.send("", { embed } )
}

function helpvc (message) {

    message.channel.send("dah\nuwu\nUwU\nhuh\nrasputin\npizza\nfussspuren\naaah\ndefi\nbaka\nsenpai\ncringe\nmashalla\nkrise\nkriechen")
}



module.exports = { helpcommand, helpvc }
