const axios = require('axios');

const youtubeKey = process.env.YOUTUBE_API_KEY || require('./config.js').youtubeKey;

// returns 5 youtube videos on whatever user searched
function youtubeSearch(query) {
    const options = {
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${youtubeKey}&q=${query}`
    }
    return axios(options)
        .then((response) => {
            return response.data.items
        })
}

module.exports.youtubeSearch = youtubeSearch;