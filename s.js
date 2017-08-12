const imageSearch = require('image-search-google');

const client = new imageSearch('017576662512468239146', 'AIzaSyDQxsz4kyV1p-cP_aiwgB3aHzPzDwvZh_I');
var options = {page:1};
client.search('Salman Khan', options)
    .then(images => {
        /*
        [{
            'url': item.link,
            'thumbnail':item.image.thumbnailLink,
            'snippet':item.title,
            'context': item.image.contextLink
        }]
         */
    })
    .catch(error => console.log(error));

// search for certain size
client.search('Mahatma Gandhi', {size: 'large'});

// search for certain size
client.search('Indira Gandhi', {type: 'face'});
