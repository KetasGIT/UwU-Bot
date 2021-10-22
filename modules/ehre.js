const { getRandomInt }  = require('./randomint');

const { mysqldb, mysqluser, mysqlhost, mysqlpass } = require('./loginkey');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : mysqlhost,
  user     : mysqluser,
  password : mysqlpass,
  database : mysqldb
});

// INSERT INTO ehre
// VALUES ('15', 'Mxrtin', '25', '140191589124276225', '0', '0', '0', '0');


//add ehre userid und Anzahl
function addehre (receiver, anzahl){

    connection.query('UPDATE ehre.ehre SET ehre = ehre + ? WHERE uuid = ?', [anzahl, receiver], function(err, rows) {
        if (err) {
            console.log(err);
        } 
        else return;
      });

}

//remove ehre userid und Anzahl
function remehre (receiver, anzahl){

    connection.query('UPDATE ehre.ehre SET ehre = ehre - ? WHERE uuid = ?', [anzahl, receiver], function(err, rows) {
        if (err) {
            console.log(err);
        } 
        else return;
      });

}

//rolls for Ehre
function ehrechance (message) {

    drop = getRandomInt(18);
    rdt = getRandomInt(5)
    awardehre = getRandomInt(950)

    if (drop === 0){

        if(rdt === 0){
            message.reply("**Blessed UwU**")
            addehre(message.author.id, 40)
        }
        else {
            message.reply("**UwU**")
            addehre(message.author.id, 15)
        }

    }

    //1/1000 Chance für 1000 ehre
    if (awardehre === 0){
        message.reply("+1000 Ehre")
        addehre(message.author.id, 1000)
    }

};

//Check Ehre
//+ehre [@user]
function ehrecheck (message) {


    if(message.content.toLowerCase() === "+ehre"){

        connection.query("SELECT ehre FROM ehre WHERE UUID = ?", [message.author.id], function(err, rows) {
            if (err) {
                console.log(err);
            } 
            else if (rows.length){
                message.channel.send(message.author+" hat "+rows[0].ehre+" Ehre.")
            }
            else return;
        })

    }

    else {
    userid = message.content.split(" ")[1].replace(/[<>@!]/g,'')

    connection.query("SELECT ehre FROM ehre WHERE UUID = ?", [userid], function(err, rows) {
        if (err) {
            console.log(err);
        } 
            else if (rows.length){
                message.channel.send(message.content.split(" ")[1]+" hat "+rows[0].ehre+" Ehre.")
            }
            else return;
        })
    }
};

//Rangliste Ehre
//+topehre
function topehre (message){

    connection.query("SELECT ehre, Username FROM ehre ORDER BY ehre desc", function (err, rows) {
        if (err) {
            console.log(err);
        }else if (rows.length) {

            embed = {
                title: "Ehrenrangliste",
                color: 14191372,
                author: {
                    name: "UwU Bot",
                    icon_url: message.author.avatarURL,                 
                },
                fields:[
                    { name: '1. '+rows[0].Username, value: rows[0].ehre+' Ehre'},
                    { name: '2. '+rows[1].Username, value: rows[1].ehre+' Ehre'},
                    { name: '3. '+rows[2].Username, value: rows[2].ehre+' Ehre'},
                    { name: '4. '+rows[3].Username, value: rows[3].ehre+' Ehre'},
                    { name: '5. '+rows[4].Username, value: rows[4].ehre+' Ehre'},
                ]
                };
            message.channel.send("", { embed } )




        }
        else return;
    })
}

//Give someone Ehre
//+give 100 @UwU Bot#2479
function giveehreto (message) {

    einsatz = message.content.split(" ")[1]
    recipient = message.content.split(" ")[2].replace(/[<>@!]/g,'')

    connection.query("SELECT ehre FROM ehre WHERE UUID = ?", [message.author.id], function(err, rows) {
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
                title: "Ehre Trade - "+message.author.username,
                description: "Du gisch öpperem Ehre",
                color: 14191372,
                author: {
                    name: "UwU Bot",
                    icon_url: message.author.avatarURL,                 
                },
                fields:[
                    { name: 'Dini Ehre:', value: konto+' Ehre'},
                    { name: 'Du gisch:', value: einsatz+' Ehre'},
                    { name: 'Empfänger', value: message.content.split(" ")[2]},
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
                        remehre(message.author.id, einsatz)
                        addehre(recipient, einsatz)
                        message.reply("Transaktion erfolgrich.")

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


//Admin Ehre Commands
async function adminehre (message){

    if (message.content.split(" ")[0] === "+admh"){
        let helpmsg = await message.channel.send("+amda/r/s @user anzahl")
        setTimeout(() => {helpmsg.delete();message.delete()}, 2000);
        return
    }

    anzahl = message.content.split(" ")[2]
    recipient = message.content.split(" ")[1].replace(/[<>@!]/g,'')

    if(message.content.split(" ")[0] === "+adma"){addehre(recipient, anzahl)}
    if(message.content.split(" ")[0] === "+admr"){remehre(recipient, anzahl)}
    if(message.content.split(" ")[0] === "+adms"){
        connection.query("UPDATE ehre.ehre SET ehre = ? WHERE UUID = ?", [anzahl, recipient], function(err, rows) {

        if (err) {
            console.log(err);
        } 
        else if (rows.length){
            konto = rows[0].ehre
        }
        else return;
        }) 
    }

    message.react('✅');
    setTimeout(() => {message.delete();}, 2000);
}


module.exports = { ehrechance, ehrecheck, topehre, addehre, remehre, giveehreto, adminehre }