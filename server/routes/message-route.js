const express = require('express');
const db = require('../../database-mysql/db-helpers');

const router = express.Router();

router.get('/:userAid,:userBid', function (req, res) {
    // res.send('GET handler for /api/message route.');
    const { userAid, userBid } = req.params;
    db.getConversation(userAid, userBid).then( results => {
        res.send(results)
    }).catch( err => {
        console.error(err);
        res.sendStatus(500)
    });
});

router.get('/:userId', (req, res) => {
    const { userId } = req.params;
    db.getInbox(userId).then (results => {
        res.send(results)
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    })
})

router.post('/', function (req, res) {
    // res.send('POST handler for /api/message route.');
    const message = req.body;
    db.saveMessage(message)
        .then((message) => {
            res.send(message);
        }).catch((error) => {
            res.send(error);
        })
});

module.exports = router;