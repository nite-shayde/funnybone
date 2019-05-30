const axios = require('axios');

const giphyKey = process.env.GIPHY_API_KEY || require('./.config').giphyKey;


// retrieves 25 gifs of what user searched
function giphySearch(query) {
    const options = {
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${query}&limit=25&offset=0&rating=G&lang=en`
    }
    return axios(options)
        .then((response) => {
            return response.data
        })
}

// giphySearch('nba')
//     .then((response) => {
//         console.log(response);
//     }).catch((error) => {
//         console.log(error);
//     })

module.exports.giphySearch = giphySearch;