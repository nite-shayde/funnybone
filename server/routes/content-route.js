const express = require('express');
const { giphySearch } = require('../../api/giphy-api');
const { youtubeSearch } = require('../../api/youtube-api');

const search = { gif: giphySearch, video: youtubeSearch };

const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET handler for /api/content route.');
});

router.post('/', (req, res) => {
  const { contentType, query } = req.body;
  search[contentType](query).then((response) => {
    if (response.data) res.send(response.data);
    else res.send(response);
  }).catch((err) => {
    console.log(err);
    res.send(404);
  });
});

module.exports = router;
