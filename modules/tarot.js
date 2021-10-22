const { getRandomInt }  = require('./randomint')

function tarot (message) {

    rand = getRandomInt(22);

    const cards = [
        "https://i.imgur.com/258ZRgq.png",
        "https://i.imgur.com/Xci38q9.png",
        "https://i.imgur.com/JNC3880.png",
        "https://i.imgur.com/sLA16V3.png",
        "https://i.imgur.com/HQlXeiz.png",
        "https://i.imgur.com/odoYpk0.png",
        "https://i.imgur.com/2OgJDRV.png",
        "https://i.imgur.com/sik8597.png",
        "https://i.imgur.com/gNfEIvb.png",
        "https://i.imgur.com/IikeH50.png",
        "https://i.imgur.com/Yytgrsf.png",
        "https://i.imgur.com/VRmok5A.png",
        "https://i.imgur.com/sBSwW2i.png",
        "https://i.imgur.com/gg6Yroc.png",
        "https://i.imgur.com/QDgNXm7.png",
        "https://i.imgur.com/M1oURHI.png",
        "https://i.imgur.com/6KSgZof.png",
        "https://i.imgur.com/qdDBkmS.png",
        "https://i.imgur.com/xpFI1df.png",
        "https://i.imgur.com/hLOsa7q.png",
        "https://i.imgur.com/pge6uTy.png",
        "https://i.imgur.com/f3GUleO.png"
    ];

    cardnames = [
        "The Fool",
        "The Magician",
        "The High Priestess",
        "The Empress",
        "The Emperor",
        "The Hierophant",
        "The Lovers",
        "The Chariot",
        "Strength",
        "The Hermit",
        "Wheel of Fortune",
        "Justice",
        "The Hanged Man",
        "Death",
        "Temperance",
        "The Devil",
        "The Tower",
        "The Star",
        "The Moon",
        "The Sun",
        "Judgement",
        "The World"
    ];

    const meaning = [
        "The Fool is a powerful card in the tarot deck, in many ways indicating purity and childlike innocence. This card portends that challenging decisions lie ahead — decisions which usually involve an element of risk.",
        "The Magician card personifies all things at their beginning, the starting point of all events and undertakings, the impulse of creation. In him are all the possibilities and potential of things at their beginning.",
        "The High Priestess personifies secret knowledge and immobility. She urges you to trust your gut  — the world is full of lies and manipulation, making the ability to see through deceit a most valuable skill to nurture.",
        "The Empress represents feminine power, fertility, abundance, nurture, and the love of home and family. It’s considered to be a particularly positive card in that it signifies exceptional well-being and limitless good fortune.",
        "The Emperor signifies patriarchy, material power and protection. While generally considered to be a neutral card, when it appears in a reading this is typically a good omen.",
        "Sometimes referred to as “the Pope” or “the High Priest,” the Hierophant represents authority, convention, and a commitment to following a strict orthodox lifestyle.",
        "The Lovers card has dual meanings. As its name implies, it’s a sign of a strong relationship, but it can also indicate that you are at a major crossroads in life and that you should avoid making hasty decisions.",
        "The Chariot represents victory, conquest, and control. It does not guarantee success, but does promise that your hard work and perseverance will pay off.",
        "The Strength card represents courage, confidence, and passion. The eight Major Arcana assures the triumph of intelligence over brute strength, and morality over evil.",
        "The Hermit embodies the quest for knowledge and enlightenment through self-reflection. The ninth Major Arcana speaks to the power of solitude during this personal journey.",
        "The ultimate symbol of luck and chance, the Wheel of Fortune card signifies change, both good and bad. It’s a reminder that sometimes we are at the mercy of fate, and all we can do is wait for our luck to change",
        "Good people will be rewarded for their hard work and sacrifices, while unkind ones will be punished. Justice represents balance, fairness, and the inescapable consequences of our actions.",
        "The Hanged Man indicates that you are at a crossroads and need to let go of the past in order to arrive at your new reality. Getting there is something you strongly desire, yet it will likely involve a certain amount of sacrifice.",
        "While it tends to be the tarot card most people fear, Death doesn’t have to imply physical death. Rather, it more often portends spiritual transformation or new beginnings.",
        "In the Fool’s journey through the Major Arcana, Temperance represents the lesson that real change takes time, and as such one’s ability to exercise patience and self-control are infinite virtues.",
        "While not necessarily a negative card, the Devil nevertheless represents temptation and indulgence in sensual pleasures, regardless of how dangerous said pleasures may turn out to be.",
        "The Tower is generally considered to be a dark, threatening card and can often be a fore-bearer of unforeseen and deeply traumatic events. Attempting to preserve the status quo is futile.",
        "The Star represents creativity, hope, and optimism. It urges you to reinvest yourself in your art, and also serves as a reminder to keep the faith, both in yourself and others.",
        "The Moon card indicates a strong sense of understanding of both the present and future, but it also leaves those who draw it vulnerable to unexpected changes of course.",
        "The Sun card represents hope, energy and unbridled optimism. As such, the nineteenth Major Arcana is often associated with the accomplishment of important tasks.",
        "Judgement represents trial, consequences and rebirth. It typically appears just before a major life transition, and emphasizes the importance of self reflection.",
        "The World tarot card represents perfection, success, and accomplishment. The twenty first Major Arcana marks the end of an important project or period in your life.",

    ]

    embed = {
        "title": cardnames[rand],
        "description": "```fix\n" + meaning[rand] + "```",
        "color": 14191372,
        "image": {
            "url": cards[rand]
        }
        };
        message.channel.send("", { embed } )

};

module.exports = { tarot }