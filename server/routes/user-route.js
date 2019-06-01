const express = require("express");
const helpers = require("../../database-mysql/db-helpers");
// const bodyParser = require('body-parser');
const router = express.Router();
// app.use(bodyParser.json());

router.get("/", function(req, res) {
  helpers
    .getUsers(req.user)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.send(err);
    });
  // res.send('GET handler for /api/user route.').status(200);
});

router.post("/", function(req, res) {
  // res.send('POST handler for /api/user route.');
  console.log(req.body);
  const user = req.body;
  helpers
    .saveUser(user)
    .then(results => {
      console.log(results);
      res.redirect("/");
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(404);
    });
});

module.exports = router;
