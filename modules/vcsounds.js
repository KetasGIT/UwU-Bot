const talkedRecently = new Set();

const arraysounds = [
    "dah",
    "uwu",
    "UwU",
    "huh",
    "rasputin",
    "pizza",
    "fussspuren",
    "aaah",
    "defi",
    "baka",
    "senpai",
    "cringe",
    "mashalla",
    "krise",
    "kriechen"
]

const amogustrigger = [
    "amog us",
    "amogus",
    "among us",
    "amongus",
    "sus",
    "amog-us",
    "among-us",
    "amog_us",
    "among_us",
    "sussy",
    "imposter"
]

function amogus (message) {

    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Hehehehehe. Nöd spämme Bro " + message.author);
    } 
    else {
        if(message.member.voiceChannel){ 
            vcchannel = message.member.voiceChannel
            vcchannel.join()
            .then(connection => {
            const dispatcher = connection.playFile('/home/ketas/uwubot2/sounds/amogus.mp3');
            dispatcher.on("end", end => {vcchannel.leave()});
            })
            .catch(console.error);
        }
        else{
            message.channel.send("Du bisch i keim Voice Channel du Lauch")
            return
        }
    }

    talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
    }, 15000);

}

function vcsounds (message) {

    for (sound in arraysounds){
       if (message.content.includes(arraysounds[sound])){ 
            filename = arraysounds[sound]
       }
    }

    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Hehehehehe. Nöd spämme Bro" + message.author);
    } 
    else {
        if(message.member.voiceChannel){ 
            vcchannel = message.member.voiceChannel
            vcchannel.join()
            .then(connection => {
            const dispatcher = connection.playFile('/home/ketas/uwubot2/sounds/'+filename+'.mp3');
            dispatcher.on("end", end => {vcchannel.leave()});
            })
            .catch(console.error);
        }
        else{
            message.channel.send("Du bisch i keim Voice Channel du Lauch")
            return
        }
    }

    talkedRecently.add(message.author.id);
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
    }, 15000);


    /*
    //uwu wombo combo
    if(message.content ==="uwu"){

        uwucombo = message.author.id;
        setTimeout(() => {
        // Removes the user from the set after 15 seconds
        uwucombo = ""
        }, 13000);

    }
    

    if(talkedRecently.has(message.author.id)){
        return
    }

    

    if(message.content === "UwU" && uwucombo !== ""  && combocooldown === 0){
        message.reply("UwU Wombo Combo, +20 Ehre für beidi")
        // Adds the user to the set so that they can't talk for a minute
        combocooldown = 1
        setTimeout(() => {
        // Removes the user from the set after a minute
        combocooldown = 0
        }, 3600000);

        addehre(message.author.id, 20);
        addehre(uwucombo, 20);
    } 
    else if (message.content === "UwU" && uwucombo !== ""  || combocooldown === 1){
        message.reply("UwU Combo isch uf Cooldown.")
    }*/

}

module.exports = { vcsounds, arraysounds, amogus, amogustrigger }

