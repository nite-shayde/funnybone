const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
    res.send('GET handler for /api/content route.');
});

router.post('/', function(req, res) {
    res.send('POST handler for /api/content route.');
});

module.exports = router;