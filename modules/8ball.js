const { getRandomInt }  = require('./randomint');


function eightball (message) {

    rand = getRandomInt(16)

    question = message.content.slice(7)

    respones = [
        "Ja",
        "Nein",
        "Villicht",
        "Meh",
        "Bin ich dis Mami?",
        "Mit Sicherheit",
        "Garantiert",
        "Sicher nöd",
        "Bisch behinderet?",
        "Sorry, mini Kristallkugle isch grad i de Reparatur. Versuechs später nomal",
        "Nie im Lebe",
        "Nope",
        "Weiss au nöd",
        "Natürlich",
        "Nie",
        "Fix Bro"
    ]

    message.reply(respones[rand])

}



module.exports = { eightball }