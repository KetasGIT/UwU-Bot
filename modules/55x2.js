const { getRandomInt }  = require('./randomint');
const { addehre } = require('./ehre');
const { remehre } = require('./ehre');

var einsatz = 0
var konto = 0

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'ehre',
  password : 'root',
  database : 'ehre'
});

function g55x2 (message) {

    einsatz = message.content.split(" ")[1]

    connection.query("SELECT ehre FROM ehre WHERE UUID = " + message.author.id, function (err, rows) {
        if (err) {
            console.log(err);
        } 
        else if (rows.length){
            konto = rows[0].ehre
        }
        else return;
    }) 
    
    setTimeout(() => {

        if (einsatz > konto){
            message.reply("Du häsch zwenig Ehre.")
            return;
        }

        else if(konto >= einsatz){

            
            embed = {
                title: "55x2 - "+message.author.username,
                description: "Rollt en D100. Wänns höher als 55 rollt, gwünsch und din Isatz wird verdopplet",
                color: 14191372,
                author: {
                    name: "UwU Bot",
                    icon_url: message.author.avatarURL,                 
                },
                fields:[
                    { name: 'Dini Ehre:', value: konto+' Ehre'},
                    { name: 'Einsatz:', value: einsatz+' Ehre'},
                    { name: 'Druck ✅ zum bestätige', value: 'mit ❌ abbreche'},
                ]
                };

            message.channel.send("", { embed } ).then((reactcheck) => {
                reactcheck.react("✅")
                .then(() => reactcheck.react('❌'))
                

                const filter = (reaction, user) => {
                    return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
                };

                reactcheck.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                    .then(collected => {
                        const reaction = collected.first();

                    if (reaction.emoji.name === '✅') {

                        //confirm
                        roll = getRandomInt(99)
                        roll = roll+1
                        message.channel.send("Du häsch gwürflet: "+roll)
                        //verlore
                        if(roll < 55){
                            message.reply("Du häsch leider verlore. \n-"+einsatz+" Ehre. RIP")
                            remehre(message.author.id, einsatz)
                            addehre('641334377208479755', einsatz)
                        }
                        //win
                        else{
                            gewinn = einsatz * 2;
                            message.reply("Mir händ en Gwünner! Gratuliere! \n+"+gewinn+" Ehre!")
                            addehre(message.author.id, gewinn)
                        }
                    
                    } else {
                        //cancel
                        message.reply('Du häsch abbroche.');
                    }
                })
                .catch(collected => {
                    message.reply('Kei Reaktion becho, breche ab.');
                });

            })
        }

    }, 1000);
}


module.exports = { g55x2 }
