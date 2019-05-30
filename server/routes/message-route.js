const express = require('express');
const helpers = require('../../database-mysql/db-helpers');

const router = express.Router();

router.get('/', function (req, res) {
    // res.send('GET handler for /api/message route.');

});

router.post('/', function (req, res) {
    // res.send('POST handler for /api/message route.');
    helpers.saveMessage()
        .then((message) => {
            res.send(message);
        }).catch((error) => {
            res.send(error);
        })
});

module.exports = router;