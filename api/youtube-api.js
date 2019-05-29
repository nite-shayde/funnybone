const axios = require('axios');

const youtubeApiKey = process.env.YOUTUBE_API_KEY || require('./.config').youtubeApiKey

function youtubeSearch(query) {
    const options = {
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${youtubeApiKey}&q=${query}`
    }
    return axios(options)
        .then((response) => {
            return response.data.items
        })
}
youtubeSearch('lil wayne')
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    });

module.exports.youtubeSearch = youtubeSearch;