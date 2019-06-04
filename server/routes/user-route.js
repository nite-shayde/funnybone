const express = require('express');
const helpers = require('../../database-mysql/db-helpers');
// const bodyParser = require('body-parser');
const router = express.Router();
// app.use(bodyParser.json());

/**
 * This route gets all users from the database
 */
router.get('/', (req, res) => {
  helpers
    .getUsers(req.user)
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.send(err);
    });
});

/**
 * This route post the saved user and checks verify the user and
 * if theres an error, sends one. else redirects
 */
router.post('/', (req, res) => {
  // res.send('POST handler for /api/user route.');
  const user = req.body;
  helpers
    .saveUser(user)
    .then((savedUser) => {
      req.login(savedUser, (err) => {
        if (err) res.sendStatus(404);
        else res.redirect('/');
      });
    })
    .catch(() => {
      res.redirect('/login');
    });
});

module.exports = router;
