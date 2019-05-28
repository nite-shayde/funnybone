const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
    res.send('GET handler for /api/message route.');
});

router.post('/', function(req, res) {
    res.send('POST handler for /api/message route.');
});

module.exports = router;