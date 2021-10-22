const { getRandomInt }  = require('./randomint')

function roccopic(message){

    rand = getRandomInt(13);

    roccopics = [
        "https://s3.amazonaws.com/charitycdn/cache/resizedcrop-d7dcbaf743c47f4cb2c00dee4faf4110-800x800.jpg",
        "https://quotepark.com/media/authors/22093_rocco-siffredi.jpeg",
        "https://previews.agefotostock.com/previewimage/medibigoff/77c2be2d5fc9d8543d6a83c70ae35ee8/mdo-1837336.jpg",
        "https://europeangaming.eu/portal/wp-content/uploads/2019/08/Rocco-Siffredi.jpg",
        "https://images.ladepeche.fr/api/v1/images/view/5d8dfc09d286c22f0d539f26/large/image.jpg?v=1",
        "https://x-gossip.news/app/uploads/2019/07/b6d1342c146c2577ddf8adf74761c70a.png",
        "https://internapoli.it/wp-content/uploads/2018/10/ca128ac6-rocco.jpg",
        "http://media.hollywood.com/images/520x650/1910662.jpg",
        "https://www.thesocialpost.it/wp-content/uploads/2019/01/rocco-1-.jpg",
        "https://i1.wp.com/metro.co.uk/wp-content/uploads/2015/12/95723681.jpg?quality=90&strip=all&zoom=1&resize=644%2C853&ssl=1",
        "https://i.pinimg.com/474x/e5/d5/28/e5d52839e2355b0844525b5ecb24a956.jpg",
        "https://www.infobae.com/new-resizer/qRUO2pMpF99lLiKxEjTwt1jYV2Q=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/12/02144333/Rocco-Siffredi-sf-4.jpg",
        "https://geticket-cdn.thinkopen.it/media/import/immagine_prodotto_youtube_4769.jpg",
        "https://img-3.journaldesfemmes.fr/c9Ny0JyEwfN8cOLsBKzns5pxOcw=/2259x/smart/5af56fb314654fc3853e9e61020347e1/ccmcms-jdf/11102559.jpg"
    ]

    message.channel.send(roccopics[rand]);
}


module.exports = { roccopic }